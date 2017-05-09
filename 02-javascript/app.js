var Raquel= {
    nombre: "Lilian",
    apellido: "Quimbita",
    fechaNacimiento: new Date(),
    imprimir:function () {
        console.log(this.apellido,this.nombre);
    },
    ani0: function () {
      //console.log(this.fechaNacimiento.getFullYear())
        return this.fechaNacimiento.getFullYear()
    },
    diferenciaEdad:function (edadAComparar) {
        return Math.abs(edadAComparar-this.fechaNacimiento.getFullYear());

    }
};
Raquel.imprimir();
Raquel.ani0();
//Raquel.diferenciaEdad(2012);
console.log(Raquel.ani0());
console.log(Raquel.diferenciaEdad(2012));