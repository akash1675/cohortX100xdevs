
function deletetodo(){
    const el = document.querySelector(".parent");
    el.parentNode.removeChild(el);
}

function addtodo(){
    const val = document.querySelector("input");
    const data = val.value;
    
    const divEl = document.createElement("div");
    divEl.innerHTML="<div class='parent'><div class='add'>"+data+"</div> <button onclick='deletetodo()' class='deletebtn'>Delete</button> </div>";

    const dis = document.querySelector("body");
    dis.appendChild(divEl);
}

