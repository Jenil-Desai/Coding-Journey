let todo = [];
let req = prompt("Enter Your Option : ");

while (true) {
    if (req=="quit") {
        alert("Thanks For Using ToDo Application");
        break;
    }
    else if (req == "list") {
        if (todo==0) {
            console.log("No Task Found");
            alert("No Task Found");
        }
        else{
            for (let i=0; i<todo.length ; i++) {
                console.log(todo[i]);
            }
            console.log("Task Listed Sucessfully");
            alert("Task Listed Sucessfully");
        }
    } 
    else if (req == "add") {
        task = prompt("Enter New Task");
        todo.push(task);
        console.log("Task Added Sucessfully");
        alert("Task Added Sucessfully");
    } 
    else if (req == "delete") {
        if (todo==0) {
            console.log("No Task Found");
            alert("No Task Found");
        } else{
            task = prompt("Enter Task Number : ");
            todo[task-1] = null;
            console.log("Task Deleted Sucessfully");
            alert("Task Deleted Sucessfully");
        }
    }
    else if (req == "edit") {
        if (todo==0) {
            console.log("No Task Found");
            alert("No Task Found");
        } else{
            task = prompt("Enter Task Number : ");
            todo.splice(task-1,task,prompt("Edit Task : "));
            console.log("Task Edited Sucessfully");
            alert("Task Edited Sucessfully");
        }
    }
    else{
        console.log("Wrong Option : list | add | delete | edit");
        alert("Wrong Option : list | add | delete | edit");
    }
    req = prompt("Enter Your Option : ");
}