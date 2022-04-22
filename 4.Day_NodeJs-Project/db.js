const mongoose = require('mongoose');

module.exports = () => {

   const connectionURL = "mongodb://localhost:27017"

   mongoose.connect(connectionURL, { useNewUrlParser: true },
      (err) => {
         if (!err) {

            console.log('Mongoose connected to MongoDB');
         } else {

            console.log('MongoDB Connect Failed. Error :', err);
         }
      });
}