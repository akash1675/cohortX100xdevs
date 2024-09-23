const express = require("express");

const app = express();

const users = [{
    name:"jhon",
    kidneys:[{
        healthy:false
    }]
}];

app.use(express.json());



app.get('/', function(req, resp){
    const jhonKidneys = users[0].kidneys;
    const numberOfKidneys = jhonKidneys.length;
    let numberOfHealthyKidneys = 0;

    for(let i=0; i<jhonKidneys.length; i++){
        if(jhonKidneys[i].healthy){
            numberOfHealthyKidneys=numberOfHealthyKidneys+1;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    resp.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })

});


app.post("/", function(req, resp){
    const isHealthy = req.query.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })

    resp.json({
        msg:"Done!"
    })
})


app.put("/", function(req, resp){
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy= true;
    }
    resp.json({});
})



// remove all the unhealthy kidneys
app.delete("/", function(req, resp){
    const newKidneys = [];

    for(let i=0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys = newKidneys;
    resp.json({msd:"complete!"});


    resp.json({});
})

app.listen(4000);