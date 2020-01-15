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


let getEmpleado = async (id)=>{//Funcion, recibe una funcion como segundo parametro
        
    let empleadoDB = empleados.find( empleado => empleado.id === id);//Se busca el empleadoc on id recibido y se asigna a una variable

    if(!empleadoDB){//Si no existe empleado se manda mensaje de error a la funcion callback
        throw new error(`No existe un empleado con el ID: ${id}`);
    }else{
        return empleadoDB;//Para el metodo resolve solo se manda un parametro, si se quieren enviar mas debe ser un objeto
    }
}

let getSalario = async (empleado) =>{

    let salarioDB = salarios.find( salario => salario.id === empleado.id);

    if(!salarioDB){
        throw new error(`No existe salario para el empleado: ${empleado.nombre}`);
    }else{

        let datosSalario = {
            empleado:empleado.nombre,
            salario:salarioDB.salario
        }
        return datosSalario;
    }
}

let getInformacion = async (id) =>{

    let empleado = await getEmpleado(id);
    let res = await getSalario(empleado);

    return `${res.empleado} tiene un salario de ${res.salario}`;
}

getInformacion(1)
.then(mensaje => console.log(mensaje))
.catch(err=> console.log(err));
