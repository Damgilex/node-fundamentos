let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

//Declaro variables en una sola linea y las igualo al valor de deadpool
let { nombre: primerNombre, apellido, poder } = deadpool;

/*Pueder cambiar el nombre de la variable asignandole otro por medio de dos puntos
nombre:primerNombre*/
console.log(primerNombre, apellido, poder);