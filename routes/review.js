const express = require('express');
const router = express.Router()//mini instance
const productModel = require("../models/Product");
const reviewModel = require('../models/Review');
const { deleteReview, addReview } = require('../controller/review');
const { validateReview } = require('../middlewares/schema');




router.post("/products/:id/review", validateReview, addReview);
router.delete("/products/:pid/review/:id", deleteReview);







module.exports = router;