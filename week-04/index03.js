const express = require("express");

//--------------X-------------
function calc(n){
    let ans = 0;
    for(let i=0; i<n; i++){
        ans = ans+i
    }
    return ans;
}

function sum(a, b){
   return a+b;
}
//--------------X-------------

const app = express();

app.get("/", function(req, res){
    const n = req.query.n;
    const ans = calc(n);
    res.send(ans.toString());
})



app.listen(3000);