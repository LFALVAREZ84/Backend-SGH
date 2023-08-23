const mongoose = require('mongoose');

const { Schema } = mongoose;

const usuarioSchema = new Schema({
  nombre: String,
  email: String,
  contraseña: String,
  rol: { type: String, enum: ['cliente', 'admin'], default: 'cliente' }
});




const Usuario = mongoose.model('usuarios', usuarioSchema);

module.exports = Usuario;

