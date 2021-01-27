

// !JAVASCRIPT ASINCRONO

// const segundo = ()=>{
//     setTimeout(() => {
//         console.log('Segundo')
//     }, 1500);
// }

// const primero = () =>{
//     console.log('Inicio de primero');
//     segundo();
//     console.log('Fin de primero.');
// }

// primero();

// ! -----------------------------NUEVO EJEMPLO----------------------------
// ! --NO ES RECOMENDADO YA QUE SE VA HACIENDO MAS COMPLEJAS LAS FUNCIIONES

// const getUsuarios =()=>{
//     setTimeout(() => {
//         const userIds = [101,102,103,104,105];
//         console.log(userIds);

//         setTimeout((id) => {
//             const usuario ={
//                 email:'jacha@hotmail.com',
//                 nombre: 'Grover'
//             }
//             console.log(`${id} - ${usuario.email}- ${usuario.nombre}`);

//             setTimeout(() =>{
//                 const permisos =['admin', 'creador'];
//                 console.log(permisos);

//             }, 1500); /* no le pasamos datos ya que no lo usamos en la funcion */

//         }, 1500, userIds[1]);

//     }, 1500);
// }

// getUsuarios();

// ! CONVERTIR DE CALLBACK A PROMESAS

const getUsuariosIds = new Promise((response, reject) =>{
    setTimeout(() => {
        response([101,102,103,104,105]);
    }, 1500);
})


// ----

const getUsuario = userID =>{
    return new Promise((resolve, reject) =>{
        setTimeout((id) => {
            const usuario ={
                email: 'jch@gamil.com',
                nombre: 'juan'
            }
            resolve(`${id} - ${usuario.email}- ${usuario.nombre}`);
            
        }, 1500, userID);
    })
}

// ---

const getPermisos = id =>{ /* id es el parametro que recibe cuando se llama a la funcion */
    return new Promise((resolve, reject) =>{
        setTimeout((id) => {
            const permiso =['admin', 'creador'];
            resolve(permiso);
        }, 1500, id);
    })
}

getUsuariosIds
.then(IDs => {
    console.log(IDs);
    return getUsuario(IDs[3]);
})
.then(usuario =>{
    console.log(usuario)
    return getPermisos(usuario.id);
})
.then(permisos =>{
    console.log(permisos);
})
.catch(() =>{
    console.log('error');
})