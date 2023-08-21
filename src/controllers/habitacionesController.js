const Habitacion = require('../models/Habitacion');

const habitacionesController = {
  getAllHabitaciones: async (req, res) => {
    try {
      const habitaciones = await Habitacion.find();
      res.json(habitaciones);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las habitaciones' });
    }
  },

  // Otros métodos del controlador para crear, actualizar y eliminar habitaciones
};

module.exports = habitacionesController;
