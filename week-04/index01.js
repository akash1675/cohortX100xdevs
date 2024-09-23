
const fs = require("fs");

function main(fileName){
    fs.readFile(fileName,"utf-8", function(error, data){
        let total = data.split(" ").length;
        console.log(total);
    })
}

main("a.txt")