//console.log("Hola Mundo");
//boleano
var soltero = true;
//number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var novias = 12;
//String
var frasetion = "El numero de novias es " + (novias + 1);
//arrays
//let notas:number[]
var nombre = "asd";
nombre = 12;
//OBJETOS
/*let usuario={
    nombre:"Lilian,
    apellido:"Quimbita"

}*/
var usuario = {
    nombre: "Lilian",
    apellido: "Quimbita",
    direccion: "asd"
};
//Clases
var Persona = (function () {
    function Persona(nombre, apellido, fechaNacimiento) {
    }
    //funcion que devuelva un tipo de dato usuaurio login
    Persona.prototype.imprimirPersona = function () {
        {
            //console.log(this.nombre, this.apellido);
            this.imprimirNombre("Lilian", "  Quimbita");
            return { nombre: this.nombre, apellido: this.apellido };
        }
    };
    Persona.prototype.imprimirNombre = function (nombre, apellido) {
        if (apellido) {
            console.log(nombre, apellido);
        }
        else {
            console.log(nombre);
        }
    };
    return Persona;
}());
//instancia la clase
var persona = new Persona();
persona.imprimirPersona();
