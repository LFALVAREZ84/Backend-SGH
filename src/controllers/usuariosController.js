const Usuario = require('../models/Usuario'); // Importa el modelo de usuarios

const usuariosController = {
  getAllUsuarios: async (req, res) => {
    try {
      const usuarios = await Usuario.find();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
  },

  // Crear un nuevo usuario
  crearUsuario: async (req, res) => {
    try {
      const nuevoUsuario = await Usuario.create(req.body);
      res.status(201).json(nuevoUsuario);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el usuario' });
    }
  },

  // Obtener un usuario por su ID
  obtenerUsuarioPorId: async (req, res) => {
    const { id } = req.params;
    try {
      const usuario = await Usuario.findById(id);
      if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el usuario' });
    }
  },

  // Actualizar un usuario por su ID
  actualizarUsuario: async (req, res) => {
    const { id } = req.params;
    try {
      const usuarioActualizado = await Usuario.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!usuarioActualizado) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.json(usuarioActualizado);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
  },

  // Eliminar un usuario por su ID
  eliminarUsuario: async (req, res) => {
    const { id } = req.params;
    try {
      const usuarioEliminado = await Usuario.findByIdAndDelete(id);
      if (!usuarioEliminado) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
  },
};

module.exports = usuariosController;
