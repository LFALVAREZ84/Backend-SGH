import express from "express";
import 'dotenv/config';
import cors from "cors";
import morgan from "morgan";


console.log("Hello World BACK END 46i");

//*creamos una instancia de express
const app = express();

//configuramos el puerto en el que se ejecutara el backend
app.set('port', process.env.PORT || 5050)

//inicializamos nuestro backend 
app.listen(app.get('port'), () => {
    console.log(`backend listening to port ${app.get('port')}`);
  }).on('error', (error) => {
    console.log('ERROR:', error);
    process.exit(1);
  });

//MIDDLEWARES
//1-MIDDLEWARE NATIVO DE EXPRESS
app.use(express.json()); //permite recibir objetos en formato 
app.use(express.urlencoded({ extended: true })) //permite recibir parametros en las rutas

//2- MIDDLEWARES DE TERCEROS
app.use(morgan('dev')) //nos brinda detalles de nuestra terminal 
app.use(cors())// permite recibir peticiones remotas

app.get('/testi', (req, res) => {
  console.log('objeto req:', req);
  res.status(200).json({ message: 'aquí iria mi respuesta' })

})

app.use('/api', require('./routes/Rutes'));