import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-inicioo',
  templateUrl: './inicioo.component.html',
  styleUrls: ['./inicioo.component.css']
})
export class IniciooComponent implements OnInit {

  nombre: String = "Lilian";

  //ctrl +alt y luego ctrl +alt+l
  arregloUsuarios = [
    {
      nombre: "Lilian",
      apellido:"Quimbita"
    },
    {
      nombre: "Mashi",
      apellido:"Correo",
    },
    {
      nombre: "Raquel",
      apellido: "Vega",
    }
  ]

  constructor() {
  }

  ngOnInit() {
    // this.nombre="Lilian"
  }

  cambiarNombre(): void {

    this.nombre = "Lilian a Raquel";

  }

  cambiarOtroNombre(): void {

    this.nombre = "Lilian a Raquel";
  }

  cambiarNombreInput(nombreEtiqueta) {

    console.log(nombreEtiqueta.value);
    console.log(nombreEtiqueta.type);
    console.log(nombreEtiqueta.placeholder);


  }
}
