const mongoose = require('mongoose');

const { Schema } = mongoose;

const reservaSchema = new Schema({
  habitacion: { type: Schema.Types.ObjectId, ref: 'Habitacion', required: true },
  fechaInicio: { type: Date, required: true },
  fechaFin: { type: Date, required: true },
  cliente: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
  activa: { type: Boolean, default: true }, // Para saber si la reserva está activa o cancelada
});

const Reserva = mongoose.model('Reserva', reservaSchema);

module.exports = Reserva;
