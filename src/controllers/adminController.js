const Habitacion = require('../models/Habitacion');

const adminController = {
  // Obtener todas las habitaciones
  obtenerTodasLasHabitaciones: async (req, res) => {
    try {
      const habitaciones = await Habitacion.find();
      res.status(200).json(habitaciones);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las habitaciones' });
    }
  },

  // Crear una nueva habitación
  crearHabitacion: async (req, res) => {
    try {
      const nuevaHabitacion = await Habitacion.create(req.body);
      res.status(201).json(nuevaHabitacion);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la habitación' });
    }
  },

  // Actualizar una habitación por su ID
  actualizarHabitacion: async (req, res) => {
    const { id } = req.params;
    try {
      const habitacionActualizada = await Habitacion.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!habitacionActualizada) {
        return res.status(404).json({ error: 'Habitación no encontrada' });
      }
      res.status(200).json(habitacionActualizada);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la habitación' });
    }
  },

  // Eliminar una habitación por su ID
  eliminarHabitacion: async (req, res) => {
    const { id } = req.params;
    try {
      const habitacionEliminada = await Habitacion.findByIdAndDelete(id);
      if (!habitacionEliminada) {
        return res.status(404).json({ error: 'Habitación no encontrada' });
      }
      res.status(200).json({ message: 'Habitación eliminada exitosamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la habitación' });
    }
  },
};

module.exports = adminController;
