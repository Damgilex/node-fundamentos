/*
Async Await
 */

 let getNombre = () => {
     return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            resolve('Fernando');
        },3000);       
     });
 }

 let saludo = async () => {//await debe estar dentro de una funcion con el async
    
    let nombre = await getNombre();

    return `Hola ${nombre}`;
 }

 saludo().then(mensaje => {
     console.log(mensaje);
 })