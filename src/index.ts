const express = require('express');
import { router } from "./routes/routes";

const app = express();
const port = 5000;

app.use('', router);

app.get('/', (req, res) =>{
	res.send('Ejemplo TS UDV Multiplataforma');
});

app.get('/saludo', (req, res) =>{
	res.send('¡Hola mundo!');
});

app.listen(port, ()=>{
	console.log('El server está levantado en el puerto 5000');
});