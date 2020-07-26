const seedtheDB = require("./seeder");

var bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    express         = require("express"),
    app             = express(),
    methOvr         = require("method-override"),
    comment         = require("./models/comment"),
    Blog            = require("./models/blog"),
    seed            = require("./seeder");

console.log("Seeding DB with dummy data",seed());
app.use(express.static((__dirname + '/public')));
mongoose.connect("mongodb://localhost/blogs", { useNewUrlParser: true, useUnifiedTopology: true });
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended: true}));
app.use(methOvr("_method"));

app.listen("8080",function(){
    console.log("Server Online")
    console.log("GO TO localhost:8080");
})


//Index
app.get("/",function(req,res){
    res.redirect("/blogs");
});

app.get("/blogs",function(req,res){
    Blog.find({},function(err, blogs){
        if(err)
        {
            console.log("ERROR");
        }
        else
        {
            res.render("index",{blogs:blogs});
        }
    })
});

//New
app.get("/blogs/new",function(req,res){
    res.render("new");
})

//Create
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

//Show
app.get("/blogs/:id",function(req,res){
    Blog.findById(req.params.id).populate("comment").exec( function (err, foundBlog) {
        if(err){
            console.log("EEORROR ON SHOW ROUTE")
        }
        else{
            res.render("show",{blog: foundBlog})
        }
    })
})

//Edit
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

//Update
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

//Delete
app.delete("/blogs/:id",function(req, res){
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/");
        }
    })
})

//Comment
app.post("/blogs/:id/comments/new",function(req,res){
    Blog.findById(req.params.id,function(err,Blog){
        if(err){
            console.log(err)
        }
        else{
            comment.create(req.body.comment,function(err,comment){
                if(err){
                    console.log(err);
                }
                else{
                    console.log(Blog);
                    Blog.comment.push(comment);
                    Blog.save();
                    res.redirect("/")
                }
            })
        }
    })
})