let todos =[];

function addTodo(){
    todos.push({
        title:document.querySelector("input").value
    })
    render()
}


function deleteLastTodo(){
    todos.splice(todos.length-1, 1);
    render();
}

function deleteFirstTodo(){
    todos.splice(0, 1);
    render();
}



function createTodoComponent(todo){
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const button = document.createElement("button");

    h1.innerHTML=todo.title;
    button.inert="delete";

    div.append(h1);
    div.append(button);

    return div;
}

function render(){
    document.querySelector("#todos").innerHTML=" ";
    for(i=0; i<todos.length; i++){
        const element = createTodoComponent(todos[i]);
        document.querySelector("#todos").appendChild(element);
    }
}