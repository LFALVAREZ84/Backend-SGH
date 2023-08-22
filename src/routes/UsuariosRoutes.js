const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// Rutas para usuarios
router.get('/usuarios', usuariosController.getAllUsuarios);
router.post('/usuarios', usuariosController.crearUsuario);
router.get('/usuarios/:id', usuariosController.obtenerUsuarioPorId);
router.put('/usuarios/:id', usuariosController.actualizarUsuario);
router.delete('/usuarios/:id', usuariosController.eliminarUsuario);

module.exports = router;
