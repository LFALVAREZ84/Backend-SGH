const mongoose = require('mongoose');

const {Schema} = mongoose;
  


const habitacionSchema = new Schema({
  nombre: String,
  numero: String,
  precio: Number,
  descripcion: String,
  img1: String,  // Almacena la ruta o URL de la imagen 1
  img2: String,  // Almacena la ruta o URL de la imagen 2
  img3: String   // Almacena la ruta o URL de la imagen 
});

const Habitacion = mongoose.model('Habitaciones', habitacionSchema);

module.exports = Habitacion;
 