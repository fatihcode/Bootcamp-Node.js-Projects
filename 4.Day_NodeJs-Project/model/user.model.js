const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

   email: {
      type: String,
      required: [true, "The field `{PATH}` is required!"],
      maxlength: [200, "The field `{PATH}` must be less than 200 characters!"],
      minlength: [3, "The field `{PATH}` must be more than 3 characters!"],
   },
   password: {
      type: String,
      required: [true, "The field `{PATH}` is required!"],
   },
   name: {
      type: String,
   },
   age: {
      type: Number,
   },
   gender: {
      type: String,
   },
   isActive: {
      type: Boolean,
   },
   userType: {
      type: String,
      enum: ["Admin", "User"]
   },
});

module.exports = mongoose.model('mongoose', userSchema)