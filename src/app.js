/* jshint esversion:6 */
const express = require('express');
const path = require('path');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsDirectoryPath = path.join(__dirname,'../views');
console.log(publicDirectoryPath);
app.set('view engine', 'hbs');
app.set('views', viewsDirectoryPath);
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) =>{
    res.render('index',{
        title: 'Weather',
        name: 'Dennis Vargas'
    });
});

app.get('/about', (req, res) => {
    res.render('about',{
        title: 'About Me',
        name: 'Dennis Vargas'
    });
});

app.get('/help', (req, res) => {
    res.render('help',{
        title: 'Help',
        msg: 'Help is on the way!'
    });
});



app.get('/weather', (req, res) => {
    const weather = {
        location: 'Longview',
        forecast: 'Slush'
    };
    res.send(weather);
});

app.listen(3000,() => {
    console.log('Server is up on port 3000.');
});