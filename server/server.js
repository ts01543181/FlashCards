const express = require("express");
const router = require("./router.js");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

// const db = require('../config/key').mongoURI;
// mongoose.connect(db)
//     .then(() => console.log("Connected to MongoDB successfully"))
//     .catch(err => console.log(err));


const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use("/api", router);
    

app.listen(5000, (e) => {
    if (e) {
        console.log(e);
    } else {
        console.log("connected successfully")
    }
})