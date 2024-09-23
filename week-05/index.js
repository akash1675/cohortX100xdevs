const express = require("express");
const app = express();


//http://localhost:3000/sum?a=2&b=7
app.get('/sum', function(req, resp){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    resp.json({
        ans:a+b
    })
})

//http://localhost:3000/sums/2/7
app.get('/sums/:a/:b', function(req, resp){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    resp.json({
        ans:a+b
    })
})


app.get('sub', function(req, resp){
    const a = req.query.a;
    const b = req.query.b;

    resp.json({
        ans:a-b
    })
})


app.get('mul', function(req, resp){
    const a = req.query.a;
    const b = req.query.b;

    resp.json({
        ans:a*b
    })
})


app.get('div', function(req, resp){
    const a = req.query.a;
    const b = req.query.b;

    resp.json({
        ans:a/b
    })
})

app.listen(3000);
 