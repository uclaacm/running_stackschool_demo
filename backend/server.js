const mongoose = require('mongoose');
connection = "mongodb+srv://demo:1234@app.zgawpvg.mongodb.net/?retryWrites=true&w=majority";

mongoose.set('strictQuery', false);

mongoose
.connect(
    connection, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
.then(() => console.log("Connected to DB"))
.catch(console.error);

const Post = require('./models/posts');

const newPost = new Post({
    content: "some content",
    user: "nate",
    timestamp: Date.now()
});
newPost.save();