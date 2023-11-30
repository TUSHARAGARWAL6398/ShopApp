const productModel = require("../models/Product");
const reviewModel = require('../models/Review');

const addReview = async (req, res) => {
    let { id } = req.params;
    let { rating, comment } = req.body;
    let product = await productModel.findById(id);
    let review = await new reviewModel({ rating, comment });
    product.reviews.push(review);

    await review.save();
    await product.save();

    res.redirect(`/product/${id}`);
}
const deleteReview = async (req, res) => {
    let { pid, id } = req.params;
    //console.log(req.params);
    const product = await productModel.findById(pid);
    //console.log(product);

    let index = product.reviews.indexOf(id);
    product.reviews.splice(index, 1);
    // console.log(index);
    // console.log(product);
    await product.save();




    await reviewModel.findByIdAndDelete(id);
    res.redirect(`/product/${pid}`);




}
module.exports = { addReview, deleteReview }