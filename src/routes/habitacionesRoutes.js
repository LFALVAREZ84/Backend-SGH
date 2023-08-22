const express = require('express');
const router = express.Router();
const habitacionesController = require('../controllers/habitacionesController');

router.get('/habitaciones', habitacionesController.obtenerTodasLasHabitaciones); 
// Obtener una habitación por su ID
router.get('/habitaciones/:id', habitacionesController.obtenerHabitacionPorId);

// Crear una nueva habitación
router.post('/habitaciones', habitacionesController.crearHabitacion);

// Actualizar una habitación por su ID
router.put('/habitaciones/:id', habitacionesController.actualizarHabitacion);

// Eliminar una habitación por su ID
router.delete('/habitaciones/:id', habitacionesController.eliminarHabitacion);

module.exports = router;
