const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Editar una habitación por su ID
router.put('/habitaciones/:id', adminController.editarHabitacion);

// Eliminar una reserva por su ID
router.delete('/reservas/:id', adminController.eliminarReserva);




router.get('/habitaciones', adminController.obtenerTodasLasHabitaciones);
router.post('/habitaciones', adminController.crearHabitacion);
router.put('/habitaciones/:id', adminController.actualizarHabitacion);
router.delete('/habitaciones/:id', adminController.eliminarHabitacion);




module.exports = router;
