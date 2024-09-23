// function setTimeoutPromisified(ms){
//     let p = new Promise(resolve=>setTimeout(resolve, ms));
//     return p;
// }



// function callBack(){
//     console.log("3 sec have passed");
// }

// setTimeoutPromisified(3000).then(callBack);

// -----------------X----------------



// function wait3sec(resolve){
//     setTimeout(resolve, 3000);
// }

// function main(){
//     console.log("main  is called");
// }

// wait3sec(main);


// -----------------X----------------


// function random(resolve) {
//     setTimeout(resolve, 3000);
// };

// function callback(){
//     console.log("Promise is succeded");
// }

// let p = new Promise(random);
// p.then(callback);


// -----------------X----------------


// const fs = require('fs');

// function readTheFile(sendTheFinalValueHere){
//     fs.readFile("a.txt","utf-8", function(err,data){
//         sendTheFinalValueHere(data);
//     });
// };

// function readFile(filename){
//     return new Promise(readTheFile);
// }

// function callBack(content){
//     console.log(content);
// }

// const p = readFile();

// p.then(callBack);



// -----------------X----------------



class Promise2{
    constructor(fn){
        this.fn = fn;
        this.fn(()=>{
            this.resolve();
        })
    }
    then(callBack){
        this.resolve=callBack;
    }
}

function readTheFile(resolve){
    setTimeout(function() {
        console.log("callback based settimeout completed");
        resolve();
    }, 3000);
}

function setTimeoutPromisified(){
    return new Promise2(readTheFile);
}

const p = setTimeoutPromisified();

function callBack(){
    console.log("callback is called");
}

p.then(callBack);



// -----------------X----------------
 










