const mongoose = require('mongoose');

const {Schema} = mongoose;
  


const usuarioSchema = new Schema({
  nombre: String,
  email: String,
  contraseña: String
});

const Usuario = mongoose.model('usuarios', usuarioSchema);

module.exports = Usuario;
 