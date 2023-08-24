const Habitacion = require('../models/Habitacion');
const Reserva = require('../models/Reserva');

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
  obtenerTodasLasReservas: async (req, res) => {
    try {
      const reservas = await Reserva.find().populate('habitacion cliente');
      res.status(200).json(reservas);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las reservas' });
    }
  },


  cancelarReserva: async (req, res) => {
    const { reservaId } = req.params;
    try {
      const reserva = await Reserva.findByIdAndUpdate(reservaId, { activa: false });
      if (!reserva) {
        return res.status(404).json({ error: 'Reserva no encontrada' });
      }
      // Liberar la habitación
      const habitacion = await Habitacion.findById(reserva.habitacion);
      habitacion.disponible = true;
      await habitacion.save();
      res.status(200).json({ message: 'Reserva cancelada exitosamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al cancelar la reserva' });
    }
  },

  crearReserva: async (req, res) => {
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
        cliente: req.user._id,
      });
      await nuevaReserva.save();
      habitacion.disponible = false;
      await habitacion.save();
      res.status(201).json(nuevaReserva);
    } catch (error) {
      res.status(500).json({ error: 'Error al realizar la reserva' });
    }
  },
  cancelarReserva: async (req, res) => {
    const { id } = req.params;
    try {
      // Buscar la reserva por su ID
      const reserva = await Reserva.findById(id);
      if (!reserva) {
        return res.status(404).json({ error: 'Reserva no encontrada' });
      }

      // Marcar la habitación como disponible nuevamente
      const habitacion = await Habitacion.findById(reserva.habitacion);
      habitacion.disponible = true;
      await habitacion.save();

      // Eliminar la reserva
      await reserva.remove();

      res.status(200).json({ message: 'Reserva cancelada exitosamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al cancelar la reserva' });
    }
  },
};

module.exports = adminController;
