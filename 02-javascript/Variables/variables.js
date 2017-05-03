
//variables.js
//en java scripot se define una variable con la palabra reservada
//<var>
//ENTEROS

var dos=2;
var tres=3;
var quince=15;
var conexionDeBaseDeDatos;

console.log(dos);

//FLOAT
// no olvidarse simpre la primera minuscula las demas mayusculas
var dosPuntoCinco=2.5;
console.log(dosPuntoCinco);

//todas las demas

var verdaderoOFalso=true;
var falso =false;
var nombre='Lilian';
var negativo= -4;
var fechaNacimiento= new Date();

// no hace falta el casteo se va igualando segun
//lo que vayamos necesitando

var cuatroString='4';
cuatroString=4;
cuatroString=true;
cuatroString=false;
cuatroString=-5432;
cuatroString=new Date();
cuatroString=undefined;
cuatroString=null;

// variable que no tenga nada
var variable;
console.log(variable);
console.log(cuatroString);

// VARIABLES OBJETOS JSON

var lilian=
    {
        id:1,
        nombre:'Lilian',
        createdAt:new Date(),
        updatedAt:new Date(),
        casado:true,
        prestamos:false,
        hijos:null,
        altura:1.55,
        negativo:-1,

        //OBJETO DENTRO DE UN OBJETO
        mascota:{
                nombre: 'Panchito',
                color: 'blanco'
            }

    };

//Concatenar un objeto con String
// no se usa el + sino la coma
console.log('OBJETO',lilian);

//acceder a cada uno d elos atributos dentro de nuestro objeto
console.log('Estado: ',lilian.casado);
// para setear con un nuevo valor el atributo
lilian.casado=false;
console.log('Estado: ',lilian.casado);

//acceder atributos de la mascota
console.log('Mascota: ',lilian.mascota.color);

//borrar un atributo de un objeto
delete lilian.altura;
//Añadiendo atrobutos a un objeto
lilian.juegos='varios';

//DEFINIR un arreglo con todas las variables
//guardar objetos dentro de un arreglo
var arreglo=
    [
        1,'Raquel',24.5, false, true, null,undefined, new Date(),
        {
            a:'b'
        }
    ];
console.log(arreglo);
//imprimir una posicion
console.log(arreglo[4]);

// guardar un arreglo dentro de un objeto

var nuevoObjeto={
    papas:['chola','paiteña']
};
 console.log('Papas',nuevoObjeto);
// Matriz
var matriz =[[0,1],[2,3]];
console.log(matriz[0][0]);

var arregloDeObjetos=[
    {
        id:1,
        nombre:'jose'
    },
    {
        id:2,
        nombre:'felipe'
    }

];

console.log('Nombres',arregloDeObjetos);

