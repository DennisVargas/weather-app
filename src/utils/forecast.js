/*jshint esversion: 6*/
const request = require('request');
const forecast = (latitude, longitude, callback) =>{
    const url = 'https://api.darksky.net/forecast/94cbe7c92ae0d8142c9a81264b6e79b4/'+latitude+','+longitude;
    request({url, json: true}, (error, {body}) => {
        if(error)
            callback("Network Error.", undefined);
        else if(body.error){
            callback(`Can not find location at latt:${latitude}, long:${longitude}`, undefined);
        }else{
            forecastMsg = `It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability*100}% chance of rain.`;
            callback(undefined, forecastMsg);
        }
    });
};

module.exports = forecast;