const mongoose = require('mongoose');
// near the top is a good place to group our imports
const bcrypt = require('bcrypt');
// this should go after 

const UserSchema = new mongoose.Schema({
    userName: { 
    type: String, 
    required: [true, "Name is required"],
    minlength: [2, "Name must be at least 2 characters"]

},

email: { 
    type: String, 
   

     validate: {
         validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
           message: "Please enter a valid email"
       },
      required: [true, "Email is required"],
},



password: { 
    type: String, 
    required: [true, "Password is required"],
    minlength: [8, "Name must be at least 8 characters"]

},





   
 

}, 
{ timestamps: true });
UserSchema.virtual('confirmPassword')
.get( () => this._confirmPassword )
.set( value => this._confirmPassword = value );

UserSchema.pre('validate', function(next) {
     if (this.password !== this.confirmPassword) {
       this.invalidate('confirmPassword', 'Password must match confirm password');
   }
  next();
   });
  
  UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
      .then(hash => {
        this.password = hash;
        next();
      });
  });

  
module.exports.User = mongoose.model('User', UserSchema);

