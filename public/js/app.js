// jshint esversion:6

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');


weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    messageOne.textContent = 'loading';    
    messageTwo.textContent = '';
    const location = search.value;
    console.log(location);
    const weatherAddressQuery = 'http://localhost:3000/weather?address='+location;
    fetch(weatherAddressQuery).then((response) =>{
        response.json().then((data) =>{
            
            if(data.error){
                messageOne.textContent = data.error;
            }else{
                messageOne.textContent = `${data.location}`;
                messageTwo.textContent = `${data.forecastMsg}`;
                console.log(data);
            }
        });
    });
});