// functional argument

function sum(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function divide(a,b){
    return a/b;
}

console.log(sum(2,4));

function doOperation(a,b,op){
    return op(a,b);
}

const ans = doOperation(18,9,divide);
console.log(ans);