
//Funciones
//Void
function  holamundo() {
    console.log('Hola mundo');
}
holamundo();

//Funcion que devuelva un entero
//El doble de un entero

function doble(numero) {
    return numero*2;
}
console.log(doble(4));

//Nuktiplicar dos numeos
function multiplicar(numero1,numero2) {
    return numero1*numero2;
}
console.log(multiplicar(4,5));

//GUARDAR una funcion en una variable
var multiplicar1 = multiplicar(2,4); // Aqui estoy guardando unicamente el resultado
//Guarda toda la funcion
console.log(multiplicar1);
var multiplicacion=multiplicar;
console.log(multiplicacion(4,6));

//Funciones Anonimas
//VOID no devuelve nada
var hola= function () {
    console.log('hola');
}
hola();
console.log(hola()); //undefined

var resultado= hola();
console.log(resultado);

//mandar funciones como parametros
function hazAlgo(algo) {
    algo()
}
hazAlgo(function () {console.log('Holiii')});
hazAlgo(function () {return 2});

//TRansformar numero
function transformarNumero(numero, transformacion) {
    transformacion(numero);
}
console.log(transformarNumero(5,function (numero) {
    return numero*2;}
    ));