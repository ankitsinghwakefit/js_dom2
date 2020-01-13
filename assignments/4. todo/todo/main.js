var todos = [
    {
        text: "Buy-Milk",
        completed : true,
    },
    {
        text: "Clean Kitchen",
        completed : false,
    },
    {
        text: "Learn Js",
        completed : false,
    },
];
var emptyList = () =>{
    document.querySelector("#todos ul").innerHTML = "";
};
var renderWelcomeMessage = () => {
  //   : show welcome message
  document.querySelector("#todos ul").innerHTML = "<h2> There is No task left. Well Done! </h2> "
};
var toggleListItem = (item) => () =>{
    item.completed = !item.completed;
    renderUI();
    console.log(item);
};
var renderListItem = (item,index) => {
//      -> render the items
  var $text = document.createTextNode(item.text);
  var $li = document.createElement("li");
  if(item.completed === true){
    $li.classList.add("completed");
  }
  $li.appendChild($text);
 
  $li.addEventListener("click",toggleListItem(item));
//   $li.addEventListener("dblclick",deletetodo);
  document.querySelector("#todos ul").appendChild($li);
};
var hideCompleted = false;
var onlyPending = item => {
    return item.completed === false
};
var allItems = item => true;
var getVisibleItems = () => {
    return hideCompleted
    ? todos.filter(onlyPending)
    : todos.filter(allItems);
}
var renderListItems = (visibleItems) => {
    //   ? iterate through todos
    visibleItems.forEach(renderListItem);
    // if(hideCompleted === true){
    //     todos.filter(item => {
    //         return item.completed === false;
    //     }).forEach(renderListItem);
    // } else {
    //     todos.forEach(renderListItem);
    // }
};
var renderList = () => {
   // 1 empty curent UL
   emptyList();
   // 2 if there are todos
   var visibleItems = getVisibleItems();
   if(visibleItems.length>0){
       renderListItems(visibleItems);
   }else {
      renderWelcomeMessage();
   }
};
var toggleCompletedItems=()=>{
    hideCompleted = !hideCompleted;
    renderUI();
};
var renderButtonText= ()=>{
   var buttonText = hideCompleted ? "Show All Items"
    : "Hide Completed Items";
 
    document.querySelector("#todos button").innerHTML = buttonText;
};
var renderUI = () => {
    renderList();
    renderButtonText();
};
var handleFormSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.dir(event.target);
    if(!event.target.elements.todoText.value){
        alert("enter some");
        return;
    }
    var ab = {
        text : event.target.elements.todoText.value,
        completed : false,
    }
    todos.push(ab);
    renderUI();
    event.target.elements.todoText.value = "";
}
document.querySelector("#todos form").addEventListener("submit",
handleFormSubmit);
renderUI();
