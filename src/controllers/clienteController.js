const Habitacion = require('../models/Habitacion');
const Reserva = require('../models/Reserva'); // Importa el modelo Reserva

const clienteController = {
  obtenerHabitacionesDisponibles: async (req, res) => {
    try {
      const habitaciones = await Habitacion.find({ disponible: true });
      res.status(200).json(habitaciones);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las habitaciones disponibles' });
    }
  },

  reservarHabitacion: async (req, res) => {
    const { habitacionId, fechaInicio, fechaFin } = req.body;
    try {
      const habitacion = await Habitacion.findById(habitacionId);
      if (!habitacion) {
        return res.status(404).json({ error: 'Habitación no encontrada' });
      }
      if (!habitacion.disponible) {
        return res.status(400).json({ error: 'Habitación no disponible para reserva' });
      }
      const nuevaReserva = new Reserva({
        habitacion: habitacionId,
        fechaInicio,
        fechaFin,
        cliente: req.user._id, // Supongo que tienes la información del usuario en req.user
      });
      await nuevaReserva.save();
      habitacion.disponible = false;
      await habitacion.save();
      res.status(201).json(nuevaReserva);
    } catch (error) {
      res.status(500).json({ error: 'Error al realizar la reserva' });
    }
  },
};

module.exports = clienteController;
