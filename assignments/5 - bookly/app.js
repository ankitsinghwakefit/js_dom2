var addbtn = document.querySelector("button");
var addBookInput = document.querySelector(".addbookinput");
var ul = document.querySelector("ul");
var hideDiv = document.querySelector("#book-list");
var hideButton = document.querySelector("#hide");
var searchBox = document.querySelector("#search");
var bookName = JSON.parse(localStorage.getItem('book-list')) || [];


function delBook(event){
    event.target.parentElement.remove();
    localStorage.setItem('book-list',JSON.stringify(bookName));
};

function displayBooks (arrList) {
    ul.innerHTML = "";
    arrList.forEach(book => {
        var li = document.createElement('li');
        var btn = document.createElement("button");
        var booktext = document.createTextNode(book);
        li.append(booktext,btn);
        ul.appendChild(li);
        btn.addEventListener("click",delBook);
    });
    localStorage.setItem('book-list',JSON.stringify(bookName));
}

function newBook(event){
    // event.preventDefault();
    console.log("hii");
    if((event.keycode == 13) && (event.target.value.trim() !="")){
        book = (event.target.value).toLowerCase();
        bookName.push(book);
         event.target.value = ""; 
         displayBooks(bookName);
        }
    console.log(bookName);
};

function addNewBook (event) {
    if (event.target.previousElementSibling.value.trim() != "") {
        book = (event.target.previousElementSibling.value).toLowerCase();
        bookName.push(book);
        event.target.previousElementSibling.value = "";
        console.log(bookName);
        displayBooks(bookName);
         }
    }

function searchInput (event) {
    let query = (event.target.value.trim()).toLowerCase();
    let searchResults = bookName.filter(book => {
        return book.includes(query);
    });
    console.log(searchResults);
    displayBooks(searchResults);
}

function hideList(event) {
    if (event.target.checked == true){
        ul.style.display = "none";
        } else {
        ul.style.display = "block";
    }
    }
displayBooks(bookName);

addBookInput.addEventListener('keydown',newBook);
addbtn.addEventListener('click',addNewBook);
searchBox.addEventListener('keydown',searchInput);
hideButton.addEventListener('click',hideList);