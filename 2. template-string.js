let nombre = "Deadpool";
let real = "wade winston";

//Imprime un template string
console.log(`${nombre} ${real}`);

function Nombre() {
    //Retornaun template string
    return `${nombre} ${real}`;
}

//Se puede llamar una funcion como template string
console.log(`El nombre es: ${Nombre()}`);