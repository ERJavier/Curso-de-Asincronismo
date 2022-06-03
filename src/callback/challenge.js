//Requerir 
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//Peticion de API
let API = 'https://www.rickandmortyapi.com/api/character';

function fetchdData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    //Abrir conexion
    xhttp.open('GET', url_api, true);
    //Validar el estatus
    xhttp.onreadystatechange = function (event) {
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            } else{
                const error = new Error('Error' + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchdData(API, function(error1, data1){
    if (error1) return console.error(error1);
    fetchdData(API + data1.results[0].id, function (error2, data2){
        if(error2) return console.error(error2);
        fetchdData(data2.origin.url, function(error3, data3){
            if(error3) console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    });
});