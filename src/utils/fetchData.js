let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//Peticion de API


const fetchdData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        //Abrir conexion
        xhttp.open('GET', url_api, true);
        //Validar el estatus
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4){
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error ', url_api))
            }
        });
        xhttp.send();
    });
}
module.exports = fetchdData;
