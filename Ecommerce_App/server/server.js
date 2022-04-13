const express = require("express")
const cors = require("cors")
const app = express()
const port = 8000
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const productRoutes = require("./routes/product.routes")
const userRoutes = require("./routes/user.routes")

 
// notice that we're using the SECRET_KEY from our .env file

require('./config/mongoose.config')
require('dotenv').config();

//middlewares
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(cookieParser());





userRoutes(app)
productRoutes(app)


app.listen(port, ( ) => console.log(`Express server running on ${port}`) )