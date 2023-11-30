//Requiring modules
const express = require('express');
const app = express();
const path = require('path');
const productModel = require('./models/Product.js');
const dummy = require('./Seed.js');
const productRoutes = require('./routes/product');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const reviewModel = require('./models/Review.js');
const reviewRoutes = require('./routes/review.js');
const dbConnect = require('./configure/db.js');

//dbconnect
dbConnect();

//Configuring folders and middlewares
app.engine('ejs', ejsMate)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, "public")));




//seed data and delete data
//dummy.seedData();


//router
app.use(productRoutes);
app.use(reviewRoutes);


//server starting
app.listen(8080, () => {
    console.log("server connected");
})