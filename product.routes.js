const ProductController = require("../controllers/product.controllers")


module.exports = app => {
    app.get('/api', ProductController.index);
    app.post('/api/product', ProductController.createProduct); //create
    app.get('/api/product', ProductController.getAllProducts); //getall
    app.get('/api/product/:id', ProductController.getProduct); //getone
    app.put('/api/product/:id', ProductController.updateProduct); //update
    app.delete('/api/product/:id', ProductController.deleteProduct); //delete
}