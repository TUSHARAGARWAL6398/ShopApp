const mongoose = require('mongoose');

const dbConnect = () => mongoose.connect('mongodb+srv://tusharagarwalcs21:lpbxPkQ9QoET4v6Z@cluster0.oibzvzj.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("Connecting Database");
}).catch((err) => {
    console.log(err);
});
module.exports = dbConnect;

// mongodb://127.0.0.1:27017/shopApp
