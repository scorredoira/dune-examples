export function main() {
    let fs = io.newMemFS()
    let w = fs.openForWrite("foo.zip")
    let zw = zip.newWriter(w)

    let f = zw.create("readme.md")
    f.write("hello")

    f = zw.create("foo.txt")
    f.write("bar")

    zw.close()

    let r = zip.open("foo.zip", fs)
    for (let f of r.files()) {
        let r = f.open()
        let b = ioutil.readAll(r)
        r.close()
        fmt.println(f.name, convert.toString(b))
    }
    r.close()
}
