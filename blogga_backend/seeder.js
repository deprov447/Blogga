var mongoose = require("mongoose"),
    blogs    =  require("./models/blog"),
    comment  =  require("./models/comment");

var dummydata=[
    {
        title: "Blog Post 1- dummy",
        author: "anubhav",
        image: "https://image.shutterstock.com/z/stock-vector-portraits-of-women-of-different-nationalities-and-cultures-struggle-for-freedom-independence-1746248672.jpg",
        // comment:
        // [
        //     {
        //         text: "Nothing is not better or wore than anything, nothing is just nothing",
        //         author: "Arya Stark"
        //     },
        //     {
        //         text: "Tell Cersie it was me",
        //         author: "Lady Tyrell"
        //     }
        // ],
        body : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas laboriosam fuga dolorum debitis ratione laborum quae totam, reprehenderit quibusdam magnam? Expedita eum alias architecto eligendi similique atque, nobis, accusamus dolores quos consequatur magnam enim consequuntur et id. Nam qui error reiciendis tenetur optio facilis rerum consequatur molestias, magni beatae sint omnis soluta tempora quibusdam maiores assumenda? Rerum, natus in. Aut blanditiis ad error nemo praesentium ipsum asperiores repudiandae. Alias, est nulla? Ipsam magni rerum ipsa. Iste maiores natus, voluptatum vitae quos, autem sed aut fugit vero neque doloribus possimus? Eaque praesentium repellat fugiat eveniet, ipsam quas repudiandae iusto nostrum voluptates!"
    },
    {
        title: "Blog Post 2- dummy",
        author: "anubhav",
        image: "https://image.shutterstock.com/z/stock-vector-portraits-of-women-of-different-nationalities-and-cultures-struggle-for-freedom-independence-1746248672.jpg",
        // comment:
        // [
        //     {
        //         text: "Valar Morghullis",
        //         author: "No One"
        //     },
        //     {
        //         text: "F*ck the king",
        //         author: "Hound"
        //     }
        // ],
        body : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas laboriosam fuga dolorum debitis ratione laborum quae totam, reprehenderit quibusdam magnam? Expedita eum alias architecto eligendi similique atque, nobis, accusamus dolores quos consequatur magnam enim consequuntur et id. Nam qui error reiciendis tenetur optio facilis rerum consequatur molestias, magni beatae sint omnis soluta tempora quibusdam maiores assumenda? Rerum, natus in. Aut blanditiis ad error nemo praesentium ipsum asperiores repudiandae. Alias, est nulla? Ipsam magni rerum ipsa. Iste maiores natus, voluptatum vitae quos, autem sed aut fugit vero neque doloribus possimus? Eaque praesentium repellat fugiat eveniet, ipsam quas repudiandae iusto nostrum voluptates!"
    }
]

function seedtheDB(){
    blogs.deleteMany({},function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("Removed every previous blog");

            dummydata.forEach(function(seed){
                blogs.create(seed,function(err,blog){
                    if(err){
                        console.log(err);
                    }
                    else{
                        // comment.create(seed.comment,function(err,comment){
                        //     if(err){
                        //         console.log(err);
                        //     }
                        //     else{
                        //         blog.comments.push(comment);
                        //         blog.save();
                        //     }
                        // })
                        console.log("added a dummy blog");

                    }
                })
            })
        }
    })
}

module.exports = seedtheDB;