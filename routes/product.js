const express = require('express');
const router = express.Router()//mini instance
const productModel = require("../models/Product");
const reviewModel = require('../models/Review');
const { splash, showProducts, addNewProduct, newProductForm, showProduct, editProduct, editProductForm, deleteProduct, searchProduct } = require('../controller/product');
const { validateProduct } = require("../middlewares/schema");


//search
// router.get("/category", async (req, res) => {
//     //console.log(req.body);
//     let { search } = req.query;
//     search = search.toLowerCase();
//     const product = await productModel.find({ category: search })
//     console.log(product);
//     res.render("./products/index", { product });
// })

//homepage
router.route("/").get(splash)

//showing all products
router.route("/products").get(showProducts);


//showing form to add new product
router.get("/product/new", newProductForm);


//creating a new product
router.post("/products", validateProduct, addNewProduct);

//showing one product
router.get("/product/:id", showProduct);

//show edit form of product
router.get("/product/:id/edit", editProductForm);
//edit one product

router.patch('/products/:id', editProduct);
//Delete a product
router.delete("/products/:id", deleteProduct);


//search
router.get('/category', searchProduct)





module.exports = router;