const {Product} = require('../models/product.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

//create
module.exports.createProduct = (request, response) => {
    const {    productName, 
       description, imageUrl, category} = request.body;
    Product.create({
        productName, 
        description, imageUrl, category
    })
        .then(newProduct => response.json(newProduct)) //add validations
        .catch(err => response.status(400).json(err));
}

//get all
module.exports.getAllProducts = (request, response) => {
    Product.find()
        .then(products => response.json(products))
        .catch(err => response.json(err))
}


//show one 
module.exports.getProduct = (request, response) => {
    Product.findOne({_id: request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}


//update
module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}

//delete
module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}