const fs = require('fs');

// function print(err,data){
//     console.log(data);
// }

function print(err,data){
    if(err){
        console.log("File is not found!");
    }
    else{
        console.log(data);
    }
}

fs.readFile("a-1.txt", "utf-8", print);
fs.readFile("sex-2.txt", "utf-8", print);


console.log("Done!");



//---------x-------------
// function readFile(filePath, encoding,op)
// {
//     // read file
//     op("Error", "hiii there");
// }
// ----------x--------------

