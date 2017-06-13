//console.log("Hola Mundo");

//boleano
let soltero:boolean = true;
//number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let nombre: string =
let novias=12;
//String

let frasetion =`El numero de novias es ${novias+1}`;

//arrays

//let notas:number[]
let nombre:any="asd";
nombre =12;

//OBJETOS
/*let usuario={
    nombre:"Lilian,
    apellido:"Quimbita"

}*/
let usuario:usuarioLogin ={
    nombre:"Lilian",
    apellido:"Quimbita",
    direccion:"asd"
}
//Interfaz

interface usuarioLogin
{
    //atributos que siempre van a ir
    nombre:string,
    apellido:string,
    direccion?:string
    //atributo q aumente
}

//Clases

class Persona {
    //inicializado
    /*nombre:string ="Lilian";//publico por defecto
     //sin inicializar
     private apellido:string;
     //?opcional
     public fechaNacimiento?:Date;

     constructor(nombre:string, apellido:string,fechaNacimiento?:Date){
     this.nombre=nombre;
     this.apellido=apellido;
     this.fechaNacimiento=fechaNacimiento;
     }*/
    nombre?: string;
    apellido?:string;
    fechaNacimiento?: Date;

    constructor(nombre?: string, apellido?: string, fechaNacimiento?: Date) {

    }
    //funcion que devuelva un tipo de dato usuaurio login
    public imprimirPersona():usuarioLogin {
        {
            //console.log(this.nombre, this.apellido);
            this.imprimirNombre("Lilian","  Quimbita");
            return{nombre:this.nombre, apellido:this.apellido}
        }
    }

    private imprimirNombre(nombre:string,apellido?:string):void
    {
        if(apellido)
        {
            console.log(nombre,apellido);
        }
        else
        {
            console.log(nombre);
        }
    }
}
//instancia la clase

let persona=new Persona();
persona.imprimirPersona();