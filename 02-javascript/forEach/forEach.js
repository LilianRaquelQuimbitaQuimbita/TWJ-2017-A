//FOR EACH nos devuelve undefined
//sirve para iterar un arreglo
//OPERADORES

//LET en vez de VAR
//permite mandasr funciones como parametros
//El for each acepta como paraemtros la funcion

let arregloNumeros = [1,2,3,4,5,6];
let resultado = arregloNumeros.forEach((numero,indice)=>{
    console.log(indice,numero);
})
console.log('Resultado: ',resultado)



function nuevoForEach(arreglo,funcion)
{
    for(var i=0; i<arreglo.length;i++)
    {
        function(arreglo[i],i,arreglo)
        //current value
        //console.log(arreglo[i])
        //indix
        //console.log(i)
        //arreglo
        //console.log(arreglo)
    }
}

//nuevoForEach(arregloNumeros)
nuevoForEach(arregloNumeros,(valor,index)=>{
    console.log('Desde nuevo ForEach',valor,index);
})