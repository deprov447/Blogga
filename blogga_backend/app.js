var bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  express = require("express"),
  app = express(),
  methOvr = require("method-override"),
  comment = require("./models/comment"),
  Blog = require("./models/blog"),
  seed = require("./seeder"),
  User = require("./models/user"),
  passport = require("passport"),
  localStrategy = require("passport-local"),
  cors = require("cors");
psMongoose = require("passport-local-mongoose");

app.use(
  require("express-session")({
    secret:
      "Everyone of our deeds is merely a response to some previous, unsettled deed",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cors());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(passport.initialize());
app.use(passport.session());

console.log("Seeding DB with dummy data", seed());
mongoose.connect("mongodb://localhost/blogs", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(methOvr("_method"));

app.listen("8080", function () {
  console.log("Server Online");
  console.log("GO TO localhost:8080");
});

app.use(function (req, res, next) {
  res.locals.currUser = req.user;
  next();
});

//Index
app.get("/", function (req, res) {
  res.redirect("/blogs");
});

app.get("/blogs", function (req, res) {
  Blog.find({}, function (err, blogs) {
    if (err) {
      console.log("ERROR");
    } else {
      // res.render("index",{blogs:blogs});
      res.send(blogs)
    }
  });
});

//New
app.get("/blogs/new", isLoggedIn, function (req, res) {
  res.render("new");
});

//Create
app.post("/blogs", isLoggedIn, function (req, res) {
  req.body.author = res.locals.currUser.username;
  Blog.create(req.body, function (err, newBlog) {
    if (err) {
      console.log("ERRRORRR SUBBMIITTTING");
      res.render("new");
    } else {
      res.redirect("/blogs");
    }
  });
});

//Show
app.get("/blogs/:id", function (req, res) {
  Blog.findById(req.params.id)
    .populate("comment")
    .exec(function (err, foundBlog) {
      if (err) {
        console.log("EEORROR ON SHOW ROUTE");
      } else {
        // res.render("show",{blog: foundBlog})
        res.json(foundBlog);
      }
    });
});

//Edit
app.get("/blogs/:id/edit", isLoggedIn, function (req, res) {
  Blog.findById(req.params.id, function (err, thatblog) {
    if (err) {
      console.log("EEERRORR ON Edit Route");
    } else {
      res.render("edit", { blog: thatblog });
    }
  });
});

//Update
app.put("/blogs/:id", isLoggedIn, function (req, res) {
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function (err, updblog) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
});

//Delete
app.delete("/blogs/:id", isLoggedIn, function (req, res) {
  Blog.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
});

//Comment
app.post("/blogs/:id/comments/new", isLoggedIn, function (req, res) {
  Blog.findById(req.params.id, function (err, Blog) {
    if (err) {
      console.log(err);
    } else {
      comment.create(req.body.comment, function (err, comment) {
        if (err) {
          console.log(err);
        } else {
          console.log(Blog);
          Blog.comment.push(comment);
          Blog.save();
          res.redirect("/blogs/" + req.params.id);
        }
      });
    }
  });
});

///authentications
app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

app.get("/register", function (req, res) {
  res.render("register");
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/blogs",
    failureRedirect: "/login",
  }),
  function (req, res) {}
);

app.post("/register", function (req, res) {
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
        res.redirect("/register");
      } else {
        passport.authenticate("local")(req, res, function () {
          res.redirect("/blogs");
        });
      }
    }
  );
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}
