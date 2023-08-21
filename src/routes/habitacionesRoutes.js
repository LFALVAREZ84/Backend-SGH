const express = require('express');
const router = express.Router();
const habitacionesController = require('../controllers/habitacionesController');

router.get('/habitaciones', habitacionesController.getAllHabitaciones);
// Agregar más rutas para crear, actualizar y eliminar habitaciones

module.exports = router;
