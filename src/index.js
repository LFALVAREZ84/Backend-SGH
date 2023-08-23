import express from "express";
import 'dotenv/config';
import cors from "cors";
import morgan from "morgan";
import session from 'express-session'; // Importa express-session

const connectDb = require("./database/db");

console.log("Hello World BACK END 46i");

// Crear una instancia de express
const app = express();

// Configurar el puerto en el que se va a ejecutar el servidor
app.set("port", process.env.PORT);

// Conectar a la base de datos
const initApp = async () => {
  try {
    await connectDb();
    app.listen(app.get("port"), () => {
      console.log(`BackEnd46i listening to PORT: ${app.get("port")}`);
    }).on("error", (error) => {
      console.log("ERROR:", error);
      process.exit(1);
    });
  } catch (error) {
    console.log("ERROR:", error);
    process.exit(1);
  }
};

initApp();

// Configuración de sesiones y Passport
const passport = require('./configuraciones/passport-config'); 

app.use(session({
  secret: 'secret-key', // Cambia esto por una clave secreta más segura
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// Middlewares
app.use(express.json());

// Rutas
app.use('/api', require('./routes/habitacionesRoutes'));
app.use('/api', require('./routes/UsuariosRoutes')); 
