const fs = require('fs');

const document1 = fs.readFileSync("a.txt","utf-8"); // synchronous
console.log(document1);


const document2 = fs.readFileSync("a-1.txt","utf-8"); //synchronous
console.log(document2);


fs.readFile("a-2.txt", "utf-8", function(err, content){ // async
    console.log(content);
})