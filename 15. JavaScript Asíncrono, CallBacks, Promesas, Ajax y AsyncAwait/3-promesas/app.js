let promesa = new Promise ((resolve, reject) =>{
    if (false){
        resolve ('La operacion fue exitosa.');
    }else{
        reject ('Hubo un error');
    }
});

promesa.then ( response => {
    console.log('Response:' + response);
}).catch( error =>{console.log('Error:' +error)}); 

// ! EJEMPLO # 2

var miPromesa = Promise.resolve('comida');
miPromesa.then(resp => console.log(resp));


// !EJEMPLO # 3

var miPromesa2 = new Promise(function (resolve, reject){
    setTimeout(() => resolve(4), 2000);
});

miPromesa2.then(resp =>{
    resp+=5;
    console.log(resp);
});
