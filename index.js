const express = require('express');
const db = require("./connection");

const Post = require("./Models/Post");

const path = require('path');

const bodyParser = require('body-parser');

const session = require('express-session');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(session({

    secret: "secret-key",
    resave: true,
    saveUninitialised: true,

    cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000
    }
}));


app.listen(5000, ()=> {
    console.log("Server is running on port 5000");
})


app.post("/story", async (req, res) => {

    console.log(req.body);

    let post

    await Post.findOne({postImg: req.body.postid}, (err, docs) => {

        if (docs!=null){

            post = docs;
        }

        else {

            console.log("PROBLEM");
        }
    }).clone().catch(function(err){ console.log(err)})

    console.log(post);

    res.json({post:post});

})
