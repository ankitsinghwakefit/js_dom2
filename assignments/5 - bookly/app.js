var addbtn = document.querySelector("button");
var addBookInput = document.querySelector(".addbookinput");
var ul = document.querySelector("ul");
var hideDiv = document.querySelector("#book-list");
var hideButton = document.querySelector("#hide");
var toggl = true;
var searchBox = document.querySelector("#search");
var bookName = [];

function deleteBook(event){
    event.target.parentElement.remove();
}
function hideList(){
    toggl = !toggl;
    if(toggl){
        hideDiv.style.display = "none";
    }else {
        hideDiv.style.display = "initial";
    }
}
function fatchBooks(event){
    event.preventDefault();
    if(bookName.includes(event.target.value)){
        renderList();
    }
}

function renderList(){
    var li = document.createElement("li");
    var liText = document.createTextNode(addBookInput.value);
    bookName.push(addBookInput.value);
    var delButton = document.createElement("button");
    ul.appendChild(li);
    li.append(liText,delButton);
    hideButton.addEventListener("click", hideList);
    delButton.addEventListener("click",deleteBook);
    searchBox.addEventListener("keydown",fatchBooks);
    addBookInput.value = "";
}

function addBook(event){
   event.preventDefault();
   renderList();
}

addbtn.addEventListener("click",addBook);

