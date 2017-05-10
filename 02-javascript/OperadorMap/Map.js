//OPERADORES
//MAP
//sirve para transformar un arreglo nos devuelve algo
//a diferencia del foreach que solo itera el arreglo
//se usan en losn arreglos

let arreglo =[1,3,"JS",5];

let resultado =arreglo.map((valor,indice)=>{
    //return indice;  retorna el indice
    return valor;
});
console.log(resultado);


//Segundo ejemplo concatenar

let arregloUusarios =[{
    nombre:"Lilian"
},{
    nombre:"Andres"

}];

let nuevoArreglo =arregloUusarios.map((usuario)=>{

    usuario.nombre = "Sr. o Sra. "+usuario.nombre
    usuario.fechaCreacion= new Date();
    usuario.anoCreacion =usuario.fechaCreacion.getFullYear()
    return usuario;
})

console.log("Objeto",nuevoArreglo);