var mongoose = require("mongoose");

var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  author: String,
  created: { type: Date, default: Date.now },
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
});

var Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
