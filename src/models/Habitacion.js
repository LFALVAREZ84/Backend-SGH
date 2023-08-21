const mongoose = require('mongoose');

const habitacionSchema = new mongoose.Schema({
  numero: { type: String, required: true },
  tipo: { type: String, required: true },
  // Otros campos de la habitación
});

const Habitacion = mongoose.model('Habitacion', habitacionSchema);

module.exports = Habitacion;
