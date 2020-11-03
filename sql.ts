
export function main() {
    let q = sql.newSelect()
    q.addColumns("id")
    q.from("foo AS bar")
    q.where("id = ?", 33)
    q.and("name IS NOT NULL")
    q.orderBy("id ASC")
    q.limit(10)

    console.log(q.toSQL(true))
}

