const express = require('express');
const app = express();
const port = 5000;
app.get('/', (req, res) => {
    res.send('Ejemplo TS UDV Multiplataforma');
});
app.get('/saludo', (req, res) => {
    res.send('¡Hola mundo!');
});
app.listen(port, () => {
    console.log('El server está levantado en el puerto 5000');
});
//# sourceMappingURL=index.js.map