const Habitacion = require('../models/Habitacion');

const clienteController = {
  obtenerHabitacionesDisponibles: async (req, res) => {
    try {
      const habitaciones = await Habitacion.find({ disponible: true });
      res.status(200).json(habitaciones);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las habitaciones disponibles' });
    }
  },

  // Otras funciones para clientes
};

module.exports = clienteController;
