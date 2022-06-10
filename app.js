let mylibrary = [];

let container = document.querySelector('#container');

let popup = document.querySelector('#popup');
popup.style.display = 'none';

let newbook = document.querySelector('#newbookbtn');

let submit = document.querySelector('#submit');
submit.addEventListener('click', () => {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let newBook = new Book(title, author, 99);
    addBookToLibrary(newBook);
    displayBooks();
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    hidePopup();
})

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(b) {
    mylibrary.push(b);
}

function displayBooks() {
    container.innerHTML = '';
    for (let i = 0; i < mylibrary.length; i++) {
        let card = document.createElement('div');
        card.setAttribute('id', mylibrary[i].title);
        card.setAttribute('class', 'book');
        card.innerText = `${mylibrary[i].title}, \n${mylibrary[i].author}, \n${mylibrary[i].pages}`

        let removebtn = document.createElement('button');
        removebtn.setAttribute('id', `${mylibrary[i].title}rmv`);
        removebtn.innerText = `remove me!`;
        removebtn.addEventListener('click', () => {
            console.log(`remove ${mylibrary[i].title}`);
            let element = document.querySelector(`#${mylibrary[i].title}`);
            element.remove();
        })
        card.appendChild(removebtn);

        container.appendChild(card);
    }
}

let fhr451 = new Book('Fahrenheit 451', 'Ray Bradbury', '200');
let meditations = new Book('meditations', 'marcus', '204');

addBookToLibrary(fhr451);
addBookToLibrary(meditations);

displayBooks();

function showPopup() {
    popup.style.display = 'block';
}

function hidePopup() {
    popup.style.display = 'none';
}

newbook.addEventListener('click', () => {
    showPopup();
})

