const myLibrary = [];

const dialog = document.querySelector("dialog")
const showButton = document.querySelector("dialog + button")
const closeButton = document.querySelector("dialog button")
const cancelButton = document.querySelector("#cancel")
const cards = document.querySelector(".cards")
const bookForm = document.querySelector("#bookForm")


class book {

    constructor (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
    setread () {
        if (this.read == "yes") {
            this.read = "no"
        }
        else {
            this.read = "yes"
        }
    }
}

addBookToLibrary("The Hobbit","Tolkien","400","no")
myLibrary.forEach((Book, i) => createCard(Book.title, Book.author, Book.pages, Book.read, i))

function addBookToLibrary (title, author, pages, read) {
    const addBook = new book(title, author, pages, read)
    console.log(addBook)
    myLibrary.push(addBook)

    }



bookForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let title = document.querySelector(".title").value
    let author = document.querySelector(".author").value
    let pages = document.querySelector(".pages").value
    let readYet = document.querySelector("input[name='readYet']:checked").value
    console.log(readYet)
    addBookToLibrary(title, author, pages, readYet)
    cards.innerHTML = ''
    myLibrary.forEach((Book, i) => {
        createCard(Book.title, Book.author, Book.pages, Book.read, i)})

    dialog.close()
})

/*function addBook() {
    let title = document.querySelector(".title").value
    let author = document.querySelector(".author").value
    let pages = document.querySelector(".pages").value
    let readYet = document.querySelector(".readYet").value
    console.log(readYet)
    addBookToLibrary(title, author, pages, readYet)
    cards.innerHTML = ''
    myLibrary.forEach((Book, i) => {
        createCard(Book.title, Book.author, Book.pages, Book.read, i)})
}*/


console.log(myLibrary);




showButton.addEventListener("click", ()=> {
    let inputs = document.querySelectorAll("input")
    inputs.value = ''
    dialog.showModal()
})

//closeButton.addEventListener("click", () => {
   // noDefault
   // addBook()
   // dialog.close()
//})

cancelButton.addEventListener("click", () => {
    noDefault
    dialog.close();
})

function noDefault(event) {
    event.preventDefault();
}
function createCard(title, author, pages, readYet, i) {
    let card = document.createElement("div")
    card.setAttribute("data-id", `${i}`)
    let cardContent = document.createElement("div")
    cardContent.textContent = "Title: " + title + "\nAuthor: " + author + "\nLength: " + pages + " pages long\nRead yet?: "
    let readButton = document.createElement("button")
    readButton.innerHTML = "Read?"
    let readText = document.createElement("div")
    if (readYet == 'yes') {
        readText.textContent = "Yes"
    }
    else {
        readText.textContent = "No"
    }
    readText.classList.add("readText")
    const removeButton = document.createElement("button")
    removeButton.innerHTML = "Remove"
    console.log(cardContent)
    card.appendChild(cardContent)
    card.appendChild(readText)
    card.appendChild(readButton)
    card.appendChild(removeButton)

    function readToggle() {
        const cardID = document.querySelector(`div[data-id="${i}"] > .readText`)
        if (myLibrary[i].read == "yes") {
            
            myLibrary[i].setread()
            cardID.textContent = "No"
            console.log(myLibrary[i])
        }
        else {
            myLibrary[i].setread()
            cardID.textContent = "Yes"
            console.log(myLibrary[i])
        }
}

    function removal() {
        const card = document.querySelector(`div[data-id="${i}"]`)
        console.log(card)
        card.remove()
        delete myLibrary[i]
    }
    cards.appendChild(card)
    card.classList.add("card")

    removeButton.addEventListener("click", removal
   )

   readButton.addEventListener("click", readToggle)

}


