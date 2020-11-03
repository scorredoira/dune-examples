export function main() {
    let p = bytecode.compileStr(`
        function sum(a, b) {  
            return a + b
        }  
    `)

    let vm = runtime.newVM(p)

    let v = vm.runFunc("sum", 2, 3)

    fmt.println(v)
}
