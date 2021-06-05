const express = require("express");
require("./db/conn");
const publicdetails = require("./models/publicd");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.post("/publicdetails" , (req , res) => {
    console.log(req.body);
    const user = new publicdetails(req.body);

    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
    
})

app.listen(port , () => {
    console.log('connected');
})