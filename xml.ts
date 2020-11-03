import "native"

function main() {
  let doc = xml.newDocument()
  let people = doc.createElement("People")
  let person = people.createElement("Person")
  person.createAttribute("age", "33")
  person.setValue("John")
  fmt.println(doc.toString())


  doc = xml.readString(`<bookstore xmlns:p="urn:schemas-books-com:prices">    
                          <book category="COOKING">
                            <title lang="en">Everyday Italian</title>
                            <author>Giada De Laurentiis</author>
                            <year>2005</year>
                            <p:price>30.00</p:price>
                          </book>                          
                          <book category="WEB">
                            <title lang="en">Learning XML</title>
                            <author>Erik T. Ray</author>
                            <year>2003</year>
                            <p:price>39.95</p:price>
                          </book>                        
                        </bookstore>`)

  let root = doc.selectElement("bookstore")
  fmt.println(root.tag)

  for (let book of root.selectElements("book")) {
    fmt.println(book.getAttribute("category"))
    fmt.println("TITLE", book.selectElement("title").getValue())
  }

}