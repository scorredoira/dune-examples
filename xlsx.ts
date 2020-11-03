import "native"

function main() {
    // Write example
    let file = xlsx.newFile()
    let sheet = file.addSheet("Sheet1")
    let row = sheet.addRow()
    row.addCell("FOOO")
    row.addCell(2)
    row.addCell(10.2)
    row.addCell(time.now())
    file.save("/tmp/test.xlsx")

    // Read example			
    file = xlsx.openFile("/tmp/test.xlsx")
    for (let sheet of file.sheets) {
        for (let row of sheet.rows) {
            for (let cell of row.cells) {
                console.log(cell.value, cell.numberFormat)
            }
        }
    }
}