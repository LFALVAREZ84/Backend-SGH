const Usuario = require('../models/Usuario.JS');

const usuariosController = {
  getAllUsuarios: async (req, res) => {
    try {
      const usuarios = await Usuario.find();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
  },

  // Otros métodos del controlador para crear, actualizar y eliminar usuarios
};

module.exports = usuariosController;

