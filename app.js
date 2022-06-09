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

    mylibrary.forEach(element => {
        let card = document.createElement('div');
        card.setAttribute('class', 'book');
        card.innerText = `${element.title}, \n${element.author}, \n${element.pages}`

        let removebtn = document.createElement('button');
        removebtn.setAttribute('class', 'removebtn');
        removebtn.innerText = 'rmv';
        removebtn.addEventListener('click', () => {
            container.remove(card);
        })
        card.append(removebtn);

        container.appendChild(card);
    });
}

let fhr451 = new Book('fahrenheith451', 'ray', '200');
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

