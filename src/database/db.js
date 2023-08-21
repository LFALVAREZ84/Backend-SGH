const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/hotel', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conexión a la base de datos establecida');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
};

module.exports = connectDb;
