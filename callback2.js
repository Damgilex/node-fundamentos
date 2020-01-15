let empleados = [{
    id:1,
    nombre:"Miguelito"
},{
    id:2,
    nombre:"Andrea"
},{
    id:3,
    nombre:"Ian"
}];

let salarios = [{
    id:1,
    salario: 1000
},
{
    id:2,
    salario: 2000
}]

let getEmpleado = (id, callback)=>{//Funcion, recibe una funcion como segundo parametro
    let empleadoDB = empleados.find( empleado => empleado.id === id);//Se busca el empleadoc on id recibido y se asigna a una variable

    if(!empleadoDB){//Si no existe empleado se manda mensaje de error a la funcion callback
        callback(`No existe un empleado con el ID: ${id}`);
    }else{
        callback(null,empleadoDB);//se manda null como parametro de error y los datos del empleado de BD
    }
}

let getSalario = (empleado, callback)=>{
    let salarioDB = salarios.find( salario => salario.id === empleado.id);

    if(!salarioDB){
        callback(`No existe salario para el empleado: ${empleado.nombre}`);
    }else{

        let datosSalario = {
            empleado:empleado.nombre,
            salario:salarioDB.salario
        }

        callback(null,datosSalario);
    }
}

getEmpleado(2, (err, empleado) => {//Se ejecuta la funcion getEmpleado mandandole una funcion(callback) como segundo parametro
    
    if(err){//Si se recibe un error este se imprime y se acaba el programa
        return console.log(err);
    }
    getSalario(empleado,(err,datosSalario)=>{//Se ejecuta getSalario enviando una funcion(callback) como segundo parametro
        if(err){//Se imprime un error si se recibe uno y se detiene la ejecucion
            return console.log(err);
        }
        console.log(`nombre: ${datosSalario.empleado}, salario: ${datosSalario.salario}`);//Se imprimen los datos de empleado y su salrio
    })
})




