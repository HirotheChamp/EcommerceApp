const express = require("express")
const cors = require("cors")
const app = express()
const port = 8000
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const productRoutes = require("./routes/product.routes")
const userRoutes = require("./routes/user.routes")
require('./config/mongoose.config')
require('dotenv').config();

//middlewares
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(cookieParser());


// const payload = {
//     id: user._id
//   };
   
  // notice that we're using the SECRET_KEY from our .env file
// const userToken = jwt.sign(payload, process.env.SECRET_KEY);


userRoutes(app)
productRoutes(app)

// res.cookie("mycookie", "mydata", { httpOnly: true }).json({
//     message: "This response has a cookie"
//   });
app.listen(port, ( ) => console.log(`Express server running on ${port}`) )