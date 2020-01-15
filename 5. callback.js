//funcion que recibe otra funcion que se ejecuta al cumplirse cierto tiempo
//La funcion dentro del timeout se llama Callback
setTimeout(function() {
    console.log('Hola Mundo');
}, 3000);

let callback = (err, usuario) => {//Funcion de flecha
    if(err){
        return console.log(err);
    }
    console.log('usuario de base de datos', usuario);
    }

let getUsuarioById = (id, callback) => {//Funcion para obtener usuario

    let usuario = {
        nombre: "Alejandro",
        id //Si la variable es igual que el parametro, no es necesario especificar
    }

    if(id==20){
        callback(`El usuario con id: ${id}, no existe en la BD`);
    }else{
        callback(null, usuario);
    }
}

getUsuarioById(1, callback);//Se ejecuta funcion Obtener usuario


