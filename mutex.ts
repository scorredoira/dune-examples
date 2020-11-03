export function main() {
    let counter = 0
    let mut = sync.newMutex()

    for (let i = 0; i < 10; i++) {
        go(() => {
            while (true) {
                mut.lock()
                counter++
                let t = counter
                console.log(t)
                mut.unlock()
            }
        })
    }

    time.sleep(1 * time.Millisecond)
}