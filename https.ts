export function main() {
    // tls with self signed certificate
    let conf = tls.newConfig(true)
    let c = tls.generateCert()
    conf.loadCertificateData(c.cert, c.key)

    let server = http.newServer()
    server.tlsConfig = conf
    server.addressTLS = ":8080"
    server.handler = serveHTTP
    go(() => server.start())

    let req = http.newRequest("GET", "https://localhost:8080")
    for (let i = 0; i < 10; i++) {
        console.log(req.mustExecute(1 * time.Second, tls.newConfig(true)))
    }
}

function serveHTTP(w: http.ResponseWriter, r: http.Request) {
    w.write("Hello")
}