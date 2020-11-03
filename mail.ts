export function main() {
    let msg = smtp.newMessage();
    msg.from = "xxxx";
    msg.fromName = "Test"
    msg.to = ["xxxx"]
    msg.subject = "test";
    msg.body = "foo BAR"
    smtp.send(msg, "xxxxx", "", "xxx", 587, false)
}
