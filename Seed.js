const productModel = require('./models/Product');
const reviewModel = require('./models/Review');

const dummy = [{
    name: "Ipad pro max",
    img: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBhZHxlbnwwfHwwfHx8MA%3D%3D",
    price: 77550,
    desc: "THIS IS A VERY HIGH QUALITY IPAD"
},
{
    name: "I phone",
    img: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aSUyMHBob25lfGVufDB8fDB8fHww",
    price: 77550,
    desc: "THIS IS A VERY HIGH QUALITY IPAD"
},
{
    name: "Mac book pro", img: "https://images.unsplash.com/photo-1502783167913-8e718e555a06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjJTIwYm9vayUyMHByb3xlbnwwfHwwfHx8MA%3D%3D", price: 100000, desc: "THIS IS A VERY HIGH QUALITY MacBook"
},
{ name: "Airbuds", img: "https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVhciUyMGJ1ZHN8ZW58MHx8MHx8fDA%3D", price: 15000, desc: "THIS IS A VERY HIGH QUALITY Buds" }

]
const seedData = async function () {
    const product = await productModel.insertMany(dummy);
    console.log("Seeded successfully");

}
const deleteData = async function () {
    await productModel.deleteMany({});
    await reviewModel.deleteMany({});
    console.log("data deleted");
}

module.exports = { seedData, deleteData };