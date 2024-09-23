let cnt= 1;
function addTodo(){
    const input = document.querySelector("input");
    const val = input.value;
     
    const divel = document.createElement("div");
    divel.innerHTML="<div class='res'>"+cnt+'.'+val+"<button onclick='deletel()'>Delete</button></div>";
    cnt+=1;
    const display = document.querySelector("body");
    display.appendChild(divel);
}

function deletel(){
 const element  = document.querySelector(".res");
 element.parentNode.removeChild(element);

}