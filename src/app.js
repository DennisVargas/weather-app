/* jshint esversion:6 */
const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsDirectoryPath = path.join(__dirname,'../templates/views');
const partialDirectoryPath = path.join(__dirname,'../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsDirectoryPath);
hbs.registerPartials(partialDirectoryPath);
app.use(express.static(publicDirectoryPath));

const name = 'Dennis Vargas'
app.get('', (req, res) =>{
    res.render('index',{
        title: 'Weather',
        name
    });
});

app.get('/about', (req, res) => {
    res.render('about',{
        title: 'About Me',
        name
    });
});

app.get('/help', (req, res) => {
    res.render('help',{
        title: 'Help',
        name,
        msg: 'Help is on the way!'
    });
});

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address term.'});
    }
    const weather = {
        forecast: 'Slush',
        address: req.query.address
    };
    res.send(weather);
});

app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error: 'You must provide search terms.'
        });
    }
    res.send({
        products:[]
    });
});

app.get('/help/*', (req, res) => {
    res.render('404',{
        title: 'Help',
        msg: 'Help article not found',
        name});
});

app.get('*', (req, res) => {
    res.render('404',{
        title: 'ERROR! ADDRESS NOT FOUND',
        name,
        msg: 'Check Web Address.'
    });
});

app.listen(3000,() => {
    console.log('Server is up on port 3000.');
});