export function main() {
    let db = sql.open("mysql", "test:123@unix(/var/run/mysqld/mysqld.sock)/")

    db.exec("CREATE DATABASE IF NOT EXISTS deleteme")
    db = db.open("deleteme")
    db.exec("CREATE TABLE IF NOT EXISTS foo (id int)")
    db.exec("DELETE FROM foo")
    db.exec("INSERT INTO foo VALUES (1)")
    db.exec("INSERT INTO foo VALUES (2)")

    let wg = sync.newWaitGroup()

    wg.go(() => {
        fmt.println("T1")
        db.beginTransaction()
        db.queryFirst("SELECT id from foo where id = 1 FOR UPDATE")
        time.sleep(2000 * time.Millisecond)
        db.commit();
        fmt.println("T1 End")
    })

    time.sleep(10 * time.Millisecond)

    wg.go(() => {
        fmt.println("T2")
        let db2 = db.open("deleteme")
        db2.queryFirst("SELECT id from foo where id = 1 FOR UPDATE")
        fmt.println("T2 End")
    })

    wg.wait()
}