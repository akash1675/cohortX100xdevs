let currclock ;

function searchBackend(){
   console.log("req sent to the backend");
}

function debounce(){
  clearTimeout(currclock);
  currclock = setTimeout(searchBackend, 1000);
}

debounce();
debounce();
debounce();
debounce();
debounce();
debounce();
debounce();
debounce();