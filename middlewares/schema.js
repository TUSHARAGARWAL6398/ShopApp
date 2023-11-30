const { productSchema, reviewSchema } = require("../Schema");

const validateProduct = (req, res, next) => {
    const { error } = productSchema.validate(req.body);
    // console.log(error);
    if (error) {
        res.send("product validate nhi hua");
    }
    else { next() };
}
const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    // console.log(error);
    if (error) {
        res.send("review validate nhi hua");
    }
    else { next() };
}

module.exports = { validateProduct, validateReview };
