/* jshint esversion:6 */
const express = require('express');
const path = require('path');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

// app.get('', (req, res) =>{
//     res.send('<h1>Hello express!</h1>');
// });

// app.get('/help', (req, res) => {
//     res.send([{
//         name: 'dennis',
//         age: 37},{
//         name: 'dens',
//         age: 32
//     }]);
// });

// app.get('/about', (req, res) => {
//     res.send('<h1>About page.</h1>');
// });

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