const express = require('express')
const app = express()
const hbs = require('hbs');
const helpers = require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales', function(err) {});
app.set('view engine', 'hbs');

// app.get('/', (req, res) => {
//     let salida = {
//         nombre: 'fernando',
//         edad: 32,
//         url: req.url
//     };
//     res.send(salida);
// });

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Fernando'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})