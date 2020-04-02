const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(__dirname + '/views/partials');

// add the partials here:

// add the routes here:
app.get('/', (req, res) => res.render('index'));
app.get('/beers', (req, res) => res.render('beers', { beers: punkAPI }));
app.get('/random-beers', (req, res) => res.render('randombeers'));

app.listen(3000, () => console.log('🏃‍ on port 3000'));
