let todo = [];
let req = prompt("Pls enter your request what you want");

while (true){
    if (req == "quit"){
        console.log("qutting the app")
        break;
    }
    if (req == "list"){
        console.log("------");
        for (let i = 0; i<todo.length; i++){
            console.log(i, todo[i])
        }
        console.log("-------")
    }
    else if (req == "add"){
        let task = prompt("Pls enter what you want to add");
        todo.push(task);
        console.log("Task added");
    }
    else if (req == "delete"){
        let idx = prompt("Pls enter the index number you want to delete");
        todo.splice(idx, 1);
        console.log("Task deleted");
    }
    else {
        console.log("Worng Input");
    }
    req = prompt("Pls enter your request");

}

