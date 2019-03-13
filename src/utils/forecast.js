/*jshint esversion: 6*/
const request = require('request');
const forecast = (latitude, longitude, callback) =>{
    const url = 'https://api.darksky.net/forecast/'+process.env.DARKSKYTOK+'/'+latitude+','+longitude;
    request({url, json: true}, (error, {body}) => {
        if(error)
            callback("Network Error.", undefined);
        else if(body.error){
            callback(`Can not find location at latt:${latitude}, long:${longitude}`, undefined);
        }else{
            var todayHigh = body.daily.data[0].temperatureHigh;
            var todayLow = body.daily.data[0].temperatureLow;
            var currTemp = body.currently.temperature;
            var rainProb = body.currently.precipProbability*100;

            var currentTempMessage = `Currently: ${currTemp} F`;
            var highLowMessage = `Today High: ${todayHigh} F| Today Low: ${todayLow} F`;
            var chanceRainMessage = `Chance of Rain: ${rainProb}%`;
            let forecastMsgs = [currentTempMessage, highLowMessage, chanceRainMessage];
            callback(undefined, forecastMsgs);
        }
    });
};

module.exports = forecast;