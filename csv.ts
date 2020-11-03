import "native"

function main() {
    let fs = io.newMemFS()
    let file = fs.openForWrite("test.csv")

    let w = csv.newWriter(file)
    w.write([1, 2, 3, "aaa"])
    w.write([1, 2, 3, "aaa"])
    w.write([1, 2, 3, "aaa"])
    w.flush()
    file.close()

    file = fs.open("test.csv")
    let r = csv.newReader(file)
    while (true) {
        let values = r.read()
        if (!values) {
            break
        }
        fmt.println(values)
    }
}