

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

const getUsuarios =()=>{
    setTimeout(() => {
        const userIds = [101,102,103,104,105];
        console.log(userIds);

        setTimeout((id) => {
            const usuario ={
                email:'jacha@hotmail.com',
                nombre: 'Grover'
            }
            console.log(`${id} - ${usuario.email}- ${usuario.nombre}`);

            setTimeout(() =>{
                const permisos =['admin', 'creador'];
                console.log(permisos);

            }, 1500); /* no le pasamos datos ya que no lo usamos en la funcion */

        }, 1500, userIds[1]);

    }, 1500);
}

getUsuarios();