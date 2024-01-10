let addTask = document.querySelector("#addTaskBtn");
let inputTask = document.querySelector("#inputTask");
let ul = document.querySelector("ul");
let cnt = 0;

addTask.addEventListener("click", function () {
    if (inputTask.value == "") {
        alert(`Input Is Empty! Please Enter Tasks`);
        inputTask.focus();
    } else {
        let newListItem = document.createElement('li');
        newListItem.innerText = inputTask.value;
        ul.appendChild(newListItem);

        let deleteItem = document.createElement('button');
        deleteItem.innerText = "Delete Task";
        deleteItem.classList.add("delete");
        newListItem.appendChild(deleteItem);
        
        inputTask.value = "";
        inputTask.focus();
    }
});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let par = event.target;
        par = par.parentElement;
        par.remove();
    }
});