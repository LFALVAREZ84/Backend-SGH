import express from "express";
import 'dotenv/config';
import cors from "cors";
import morgan from "morgan";
import connectDb from "./database/db"; // Importa la función desde db.js

console.log("Hello World BACK END 46i");

// Crear una instancia de express
const app = express();

// Configurar el puerto en el que se va a ejecutar el servidor
app.set("port", process.env.PORT || 5050);

// Conectar a la base de datos
connectDb();

// Resto del código...

// Middlewares
app.use(express.json());

// Rutas
app.use('/api', require('./routes/habitacionesRoutes'));
app.use('/api', require('./routes/usuariosRoutes'));

// Puerto de escucha
const PORT = app.get("port");
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});

