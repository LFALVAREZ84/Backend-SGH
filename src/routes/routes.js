const express = require('express');
const router = express.Router();
const habitacionController = require('../controllers/habitacionesController');

router.post('/habitaciones', habitacionController.crearHabitacion);
router.get('/habitaciones', habitacionController.obtenerTodasLasHabitaciones);
router.get('/habitaciones/:id', habitacionController.obtenerHabitacionPorId);
router.put('/habitaciones/:id', habitacionController.actualizarHabitacion);
router.delete('/habitaciones/:id', habitacionController.eliminarHabitacion);

module.exports = router;
