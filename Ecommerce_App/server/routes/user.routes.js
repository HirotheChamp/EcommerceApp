const UserController = require("../controllers/user.controllers")
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    // app.post("/api/register", UserController.register);
    // app.post("/api/login", UserController.login);
    // this route now has to be authenticated
    // app.get("/api/users", authenticate, UserController.getAll);
    app.get('/api', UserController.index);
    app.post('/api/user', UserController.createUser); //create
    app.get('/api/user', UserController.getAllUsers); //getall
    app.get('/api/user/:id', UserController.getUser); //getone
    app.put('/api/user/:id', UserController.updateUser); //update
    app.delete('/api/user/:id', UserController.deleteUser); //delete
}