/*jshint esversion: 6*/
const request = require('request');

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoiZHZhcmdhcy1zb2Z0d2FyZSIsImEiOiJjanN3NTJ5anUwZTU1M3lvZGQ2c25xM29pIn0.yObGVA3-uqIqGcbYHomnBA";
    
    request({url: url, json: true}, (error, {body}) => {
        if(error)
            callback("Network Error.", undefined);

        else if(body.features.length <= 0){
            callback(`Can not find location: ${address}`, undefined);
        }else{
            const data = {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            };
            callback(undefined, data);
            // console.log(response.body.features[0].text);
            // console.log(`${response.body.features[0].center}`);
        }
    });
};

module.exports = geocode;
