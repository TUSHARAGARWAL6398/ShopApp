const mongoose = require('mongoose');

const dbConnect = () => mongoose.connect('mongodb://127.0.0.1:27017/shopApp').then(() => {
    console.log("Connecting Database");
}).catch((err) => {
    console.log(err);
});
module.exports = dbConnect;

// mongodb://127.0.0.1:27017/shopApp