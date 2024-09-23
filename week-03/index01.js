// let ctr = 0;

// function callback(){
//     const el = document.querySelectorAll("h4")[1];
//     el.innerHTML=ctr;
//     ctr+=1;
// }

// setInterval(callback,2000);

function AddTODo() {
    const inputEl = document.querySelector("input");
    let value = inputEl.value;
    
}


function deletetodo(index){
    const el = document.getElementById("todo-"+index);
    el.parentNode.removeChild(el);
}

const divEl = document.createElement("h1");
divEl.innerHTML="Todo List"
const parentNode = document.querySelector("body");
parentNode.appendChild(divEl);