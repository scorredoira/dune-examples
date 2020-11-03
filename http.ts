export function main() {
    let s = http.newServer()
    s.address = ":8080"
    s.handler = (w, r) => w.write("Hello world")
    go(() => s.start())

    for (let i = 0; i < 10; i++) {
        fmt.println(http.get("http://localhost:8080"))
    }
}