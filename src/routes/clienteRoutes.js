const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.get('/habitaciones-disponibles', clienteController.obtenerHabitacionesDisponibles);
// Otras rutas específicas para clientes

module.exports = router;
