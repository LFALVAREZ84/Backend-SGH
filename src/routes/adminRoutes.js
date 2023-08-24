const express = require('express');
const router = express.Router();
const passport = require('passport'); // Importa Passport
const adminController = require('../controllers/adminController');

// Obtener todas las habitaciones
router.get('/habitaciones',  passport.authenticate('local'), adminController.obtenerTodasLasHabitaciones);

// Crear una nueva habitación
router.post('/habitaciones',  passport.authenticate('local'),adminController.crearHabitacion);

// Actualizar una habitación por su ID
router.put('/habitaciones/:id',  passport.authenticate('local'), adminController.actualizarHabitacion);

// Eliminar una habitación por su ID
router.delete('/habitaciones/:id', adminController.eliminarHabitacion);
// Obtener todas las reservas
router.get('/reservas', passport.authenticate('local'), adminController.obtenerTodasLasReservas);

// Cancelar una reserva por su ID
router.put('/reservas/:reservaId', passport.authenticate('local'), adminController.cancelarReserva);
// Cancelar una reserva por su ID
router.put('/reservas/:id/cancelar', isAdmin ,adminController.cancelarReserva);

// Crear una nueva reserva
router.post('/reservas',  passport.authenticate('local'),adminController.crearReserva);


module.exports = router;
