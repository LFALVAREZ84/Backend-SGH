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
// Obtener todas las reservas
router.get('/reservas', adminController.obtenerTodasLasReservas);

// Cancelar una reserva por su ID
router.put('/reservas/:reservaId', adminController.cancelarReserva);

// Crear una nueva reserva
router.post('/reservas', adminController.crearReserva);


module.exports = router;
