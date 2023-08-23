const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const Usuario = require('./models/Usuario'); // Asegúrate de tener la ruta correcta al modelo Usuario

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const usuario = await Usuario.findOne({ email: username });
      if (!usuario) {
        return done(null, false, { message: 'Usuario no encontrado' });
      }
      const match = await bcrypt.compare(password, usuario.contraseña);
      if (match) {
        return done(null, usuario);
      } else {
        return done(null, false, { message: 'Contraseña incorrecta' });
      }
    } catch (error) {
      return done(error);
    }
  })
);

passport.serializeUser((usuario, done) => {
  done(null, usuario.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const usuario = await Usuario.findById(id);
    done(null, usuario);
  } catch (error) {
    done(error);
  }
});

module.exports = passport;