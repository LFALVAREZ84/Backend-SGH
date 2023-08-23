const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Obtener todas las habitaciones
router.get('/habitaciones', adminController.obtenerTodasLasHabitaciones);

// Crear una nueva habitación
router.post('/habitaciones', adminController.crearHabitacion);

// Actualizar una habitación por su ID
router.put('/habitaciones/:id', adminController.actualizarHabitacion);

// Eliminar una habitación por su ID
router.delete('/habitaciones/:id', adminController.eliminarHabitacion);

module.exports = router;
