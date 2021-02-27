var listElem = document.querySelector("#app ul");
var inputElem = document.querySelector("#app input");
var buttonElem = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

function renderTodos(){
    listElem.innerHTML = "";
    
    for(todo of todos){
        var todoElem = document.createElement("li");
        var todoText = document.createTextNode(todo);
        var linkElem = document.createElement("a");
        linkElem.setAttribute("href", "#");
        var pos = todos.indexOf(todo);
        linkElem.setAttribute("onclick", "deleteTodo("+ pos +")");

        var linkText = document.createTextNode("Excluir");
        linkElem.appendChild(linkText);

        todoElem.appendChild(todoText);
        todoElem.appendChild(linkElem)
        listElem.appendChild(todoElem);
    }
}
renderTodos();

function addTodo(){
    var todoText = inputElem.value;
    todos.push(todoText);
    inputElem.value = "";
    renderTodos();
    saveToStorage();
}
buttonElem.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem("list_todos", JSON.stringify(todos));
}