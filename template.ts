export function main() {
    let src = `
        <% for(let v of model) { %>
            Value: <%= v %>
        <% } %>
    `

    let model = [1, 2, 3]

    let txt = templates.render(src, model)

    fmt.println(txt)
}
