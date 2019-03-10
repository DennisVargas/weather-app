// jshint esversion:6

fetch('http://localhost:3000/weather').then((response) =>{
    response.json().then((data) =>{
        if(data.error){
            console.log(data.error);
        }else{
            console.log(data);
        }
    });
});

// fetch('http://puzzle.mead.io/puzzle').then((response) =>{
//     response.json().then((data) =>{
//         console.log("client js data:",data);
//     });
// });