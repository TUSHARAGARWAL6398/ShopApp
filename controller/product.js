
const productModel = require("../models/Product");
const reviewModel = require('../models/Review');

const splash = async (req, res) => {

    res.render("splash");
}

const showProducts = async (req, res) => {
    const product = await productModel.find();
    res.render("./products/index", { product });
}

const addNewProduct = async (req, res) => {
    let { name, img, price, desc } = req.body;
    await productModel.create({ name, img, price, desc });
    res.redirect("products");

}

const newProductForm = async (req, res) => {
    res.render("./products/new")
}
const showProduct = async (req, res) => {
    let { id } = req.params;
    const product = await productModel.findById(id).populate('reviews');

    res.render("./products/show", { product });
}

const editProductForm = async (req, res) => {
    let { id } = req.params;
    const product = await productModel.findById(id);

    res.render("./products/edit", { product });
}

const editProduct = async (req, res) => {
    let { id } = req.params;
    let { name, img, price, desc } = req.body;
    await productModel.findByIdAndUpdate(id, { name, img, price, desc })
    res.redirect(`/product/${id}`);
}

const deleteProduct = async (req, res) => {
    let { id } = req.params;
    let product = await productModel.findById(id);
    console.log(product);
    for (let review of product.reviews) {
        await reviewModel.findByIdAndDelete(review);
    }
    await productModel.findByIdAndDelete(id);
    res.redirect("/products");

}

const searchProduct = async (req, res) => {
    async function finds(Products, arr) {
        for (let item of Products) {
            let value = await productModel.findById(item.id);
            arr.push(value);
        }
        return arr;
    }
    let { search } = req.query;
    //console.log(search)
    search = search.toLowerCase();
    let Product = await productModel.find({});
    Product.map((cv) => {
        cv.name = cv.name.toLowerCase();
    })
    Product = Product.filter((cv) => {
        return cv.name.includes(search);
    })
    // Products.map((cv) => {
    //     cv.name = cv.name.toCapi();
    // })
    let arr = new Array();

    arr = await finds(Product, arr);
    product = arr;
    // console.log(Products);
    // console.log(arr);
    //res.send("hii")
    res.render("products/index", { Product });
}
module.exports = { splash, showProducts, addNewProduct, newProductForm, newProductForm, showProduct, editProductForm, editProduct, deleteProduct, searchProduct }