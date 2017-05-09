// FAT ARROW FUNCTIONS

var holaMundo=function(){
    console.log("Hola Mundo")}

holaMundo()

//se usa cuando hay mas contexto dentro de la funcion

var holaMundo2= ()=> { return "Hola mundo2" }

holaMundo2()

var holaMundo3 = ()=> "Hola Mundo3"
holaMundo3()

var holaMundo4 = ()=> holaMundo3()
holaMundo4()

//Con Parametros .
var holaMundo5 = (nombre)=> `Hola: ${nombre}`
holaMundo5('Lilian')

//No usar parentesis para un solo parametro
var holaMundo6 = apellido => `Hola: ${apellido}`
holaMundo6('Quimbita')

var holaMundo7 = (nombre,apellido) => `Srta: ${apellido} ${nombre}`
holaMundo7('Quimbita','Lilian')