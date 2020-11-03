export function main() {
    let c = sync.newChannel();

    go(() => {
        for (let i = 0; i < 10; i++) {
            c.send(i)
        }
        c.close()
    })

    while (true) {
        let v = c.receive()
        if (v == null) {
            break
        }
        fmt.println(v)
    }
}

