//Promesas:Permiten ejecutar un trabajo sincrono o asincrono y despues de resolver la tarea realizar un trabajo particular
//Este ejercicio es igual al de callback2 pero usando promesas
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


let getEmpleado = (id)=>{//Funcion, recibe una funcion como segundo parametro

    return new Promise( (resolve,reject) => {//una promes recibe 2 callbacks como parametros.
        
    let empleadoDB = empleados.find( empleado => empleado.id === id);//Se busca el empleadoc on id recibido y se asigna a una variable

    if(!empleadoDB){//Si no existe empleado se manda mensaje de error a la funcion callback
        reject(`No existe un empleado con el ID: ${id}`);
    }else{
        resolve(empleadoDB);//Para el metodo resolve solo se manda un parametro, si se quieren enviar mas debe ser un objeto
    }
    });

}

let getSalario = (empleado) =>{

    return new Promise((resolve,reject)=>{
        let salarioDB = salarios.find( salario => salario.id === empleado.id);

        if(!salarioDB){
            reject(`No existe salario para el empleado: ${empleado.nombre}`);
        }else{
    
            let datosSalario = {
                empleado:empleado.nombre,
                salario:salarioDB.salario
            }
    
            resolve(datosSalario);
        }
    })
}

//Forma de usar promesas para evitar el encadenamiento. Pero es un poco confusa la sintaxis
getEmpleado(2).then(empleado => {

    return getSalario(empleado);

    })
    .then(res=>{//Este then corresponde al return anterior, esto evita que se aniden hacia la derecha al encadenas promesas dentro
        console.log(`nombre: ${res.empleado}, salario: ${res.salario}`);
    })
    .catch(err =>{
        console.log(err);
})

/* Usando promesas es mas sencillo que callbacks, pero si se anidan mas promesas dentro se hace una identacion hacia la derecha
getEmpleado(3).then(empleado =>{

    getSalario(empleado).then(datosSalario =>{
        console.log(`nombre: ${datosSalario.empleado}, salario: ${datosSalario.salario}`);
    }, err => {//err puede ir dentro de parentesis
        console.log(err);
    });

}, (err) => {

    console.log(err);

});
*/
