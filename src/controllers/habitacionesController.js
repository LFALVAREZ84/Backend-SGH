const Habitacion = require('../models/Habitacion');



// Controlador para crear una nueva habitación 
const crearHabitacion = async (req, res) => {
  try {
    const nuevaHabitacion = await Habitacion.create(req.body);
    res.status(201).json(nuevaHabitacion);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la habitación' });
  }
};

// Controlador para obtener todas las habitaciones
const obtenerTodasLasHabitaciones = async (req, res) => {
  try {
    const habitaciones = await Habitacion.find();
    res.status(200).json(habitaciones);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las habitaciones' });
  }
};

// Controlador para obtener una habitación por su ID
const obtenerHabitacionPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const habitacion = await Habitacion.findById(id);
    if (!habitacion) {
      return res.status(404).json({ error: 'Habitación no encontrada' });
    }
    res.status(200).json(habitacion);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la habitación' });
  }
};

// Controlador para actualizar una habitación por su ID
const actualizarHabitacion = async (req, res) => {
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
};

// Controlador para eliminar una habitación por su ID
const eliminarHabitacion = async (req, res) => {
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
};


module.exports = {
  crearHabitacion,
  obtenerTodasLasHabitaciones,
  obtenerHabitacionPorId,
  actualizarHabitacion,
  eliminarHabitacion,
};
