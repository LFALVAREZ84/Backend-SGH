const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/SGH"



const connectDb = async () => {
  try {
    mongoose.connect(uri)
      .then(() => console.log('estamos conectados a la base de datos'));

  }
  
 catch (error) {
  console.log(error);
}
};

module.exports = connectDb;
