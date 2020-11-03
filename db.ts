export function main() {
    let db = sql.open("sqlite3", ":memory:")

    let r = db.exec(`CREATE TABLE IF NOT EXISTS people (
                        id KEY,
                        name VARCHAR(100) NOT NULL,
                        age INT NULL)`)

    db.exec(`INSERT INTO people (name, age) VALUES (?, ?)`, "Alice", 29)
    db.exec(`INSERT INTO people (name, age) VALUES (?, ?)`, "Bob", 27)

    for (let p of db.query("SELECT * FROM people")) {
        console.log(p)
    }
}