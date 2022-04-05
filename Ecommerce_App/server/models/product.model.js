const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
productName: {
    type: String,
required: [true, "Product name is required"],
minlength: [2, "Product name should be at least two characters"]
},

description: {
    type: String,
    required: [true, "Description is required"],
minlength: [5, "Product name should be at least 5 characters"]
},

imageUrl: { 
    type: String, 
    required: [true, "Image is required"],
    minlength: [3, "image must be at least 3 characters"]

},
category: { 
    type: String, 
    
    minlength: [3, "Category must be at least 3 characters"]

},

},{ timestamps: true});
module.exports.Product = mongoose.model('Product', ProductSchema);