var bodyParser= require("body-parser");
var mongoose= require("mongoose");
var express = require("express");
var app = express();
var methOvr= require("method-override");

mongoose.connect("mongodb://localhost/blogs", { useNewUrlParser: true, useUnifiedTopology: true });
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended: true}));
app.use(methOvr("_method"));

app.listen("8080",function(){
    console.log("Server Online")
    console.log("GO TO localhost:8080");
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
app.put("/blogs/:id",function(req,res){
    Blog.findByIdAndUpdate(req.params.id, req.body.blog,function(err,updblog){
        if(err)
        {
            console.log(err);
        }
        else{
            res.redirect("/");
        }
    })
})

//DELETE ROUTE
app.delete("/blogs/:id",function(req, res){
    Blog.findByIdAndRemove(req.params.id, function(err){
        res.redirect("/");
    })
})