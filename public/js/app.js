// jshint esversion:6

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
const messageThree = document.querySelector('#message-3');
const messageFour = document.querySelector('#message-4');

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    messageOne.textContent = 'loading';    
    messageTwo.textContent = '';
    const location = search.value;
    // console.log(location);
    const weatherAddressQuery = '/weather?address='+location;
    fetch(weatherAddressQuery).then((response) =>{
        response.json().then((data) =>{
            if(data.error){
                messageOne.textContent = data.error;
            }else{
                console.log(data);
                messageOne.textContent = `Location: ${data.location}`;
                messageTwo.textContent = `${data.forecastMsg[0]}`;
                messageThree.textContent = `${data.forecastMsg[1]}`;
                messageFour.textContent = `${data.forecastMsg[2]}`;
                
            }
        });
    });
});