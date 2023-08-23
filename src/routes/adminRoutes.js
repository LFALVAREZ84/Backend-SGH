const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/habitaciones', adminController.obtenerTodasLasHabitaciones);
router.post('/habitaciones', adminController.crearHabitacion);
router.put('/habitaciones/:id', adminController.actualizarHabitacion);
router.delete('/habitaciones/:id', adminController.eliminarHabitacion);
// Más rutas específicas para administradores

module.exports = router;
