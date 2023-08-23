// Middlewares
const checkRole = (role) => (req, res, next) => {
    if (req.isAuthenticated() && req.user.rol === role) {
      return next();
    }
    res.status(403).json({ error: 'Acceso no autorizado' });
  };
  
  // Rutas para clientes
  app.use('/api/cliente', checkRole('cliente'), require('./routes/clienteRoutes'));
  
  // Rutas para administradores
  app.use('/api/admin', checkRole('admin'), require('./routes/adminRoutes'));
  