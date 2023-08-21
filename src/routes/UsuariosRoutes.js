const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.get('/usuarios', usuariosController.getAllUsuarios);
// Agregar más rutas para crear, actualizar y eliminar usuarios

module.exports = router;
