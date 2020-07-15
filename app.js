var bodyParser= require("body-parser");
var mongoose= require("mongoose");
var express = require("express");
var app = express();

mongoose.connect("mongodb://localhost/blogs");
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended: true}));

app.listen("8080",function(){
    console.log("Server Online");
})

var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);


//RESTFUL ROUTES

//INDEX ROUTE
app.get("/",function(req,res){
    res.redirect("/blogs");
});

app.get("/blogs",function(req,res){
    Blog.find({},function(err, blogs){
        if(err)
        {
            console.log("ERROR");
            res.send("error"+err);
        }
        else
        {
            res.render("index",{blogs:blogs});
        }
    })
});

//NEW
app.get("/blogs/new",function(req,res){
    res.render("new");
})

//CREATE
app.post("/blogs",function(req,res){
    Blog.create(req.body, function(err, newBlog){
        if(err){
            console.log("ERRRORRR SUBBMIITTTING")
            res.render("new");
        }
        else{
            res.redirect("/blogs")
        }
    })
})

//show
app.get("/blogs/:id",function(req,res){
    Blog.findById(req.params.id,function(err, foundBlog){
        if(err){
            console.log("EEORROR ON SHOW ROUTE")
        }
        else{
            res.render("show",{blog: foundBlog})
        }
    })
})

//EDIT
app.get("/blogs/:id/edit",function(req,res){
    Blog.findById(req.params.id, function(err, thatblog){
        if(err){
            console.log("EEERRORR ON Edit Route");
        }
        else{
            res.render("edit",{blog: thatblog});
        }
    })
})
app.post("/blogs/:id/update",function(req,res){
    Blog.findById(req.params.id, function(err, thatblog){
        if(err){
            console.log("EEERRORR ON Edit Route");
        }
        else{
            // thatblog.title=req.params.title;
            // thatblog.body=req.params.body;
            res.send("deed");
        }
    })
})
