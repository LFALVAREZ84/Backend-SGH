const mongoose = require('mongoose');
const uri = process.env.PORTDB;
const db = process.env.DB;


const connectDb = async () => {
  try {
    mongoose.connect(`${uri}/${db}`,{useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log('estamos conectados a la base de datos'));

  }
  
 catch (error) {
  console.log(error);
}
};

module.exports = connectDb;
