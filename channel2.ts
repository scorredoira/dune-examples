export function main() {
    let c1 = sync.newChannel();
    let c2 = sync.newChannel();

    go(() => {
        for (let i = 0; i < 10; i++) {
            c1.send("Loop 1: " + i)
            time.sleep(math.rand(300) * time.Millisecond)
        }
        c1.close()
    })

    go(() => {
        for (let i = 0; i < 10; i++) {
            c2.send("Loop 2: " + i)
            time.sleep(math.rand(300) * time.Millisecond)
        }
        c2.close()
    })

    while (true) {
        let result = sync.select([c1, c2])
        if (!result.receivedOK) {
            break;
        }
        fmt.println(result.value)
    }
}

