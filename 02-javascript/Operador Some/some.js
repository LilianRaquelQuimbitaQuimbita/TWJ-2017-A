//OPERADORES
// Some es o
//every es y cuando todos los objetos cumplan con la condicion me devuleve verdadero y falso cuando al menos uno no cumpla con
//la condicion
//arreglo sobre dos puntos
let arreglo =[8,6,9,10,4,2,7,8];

let notasDeSupletorio =arreglo.map((valor,indice)=>{

    return valor/5;
})
    .some((valor)=>{
        return valor=1,3;
    });

console.log(notasDeSupletorio);



