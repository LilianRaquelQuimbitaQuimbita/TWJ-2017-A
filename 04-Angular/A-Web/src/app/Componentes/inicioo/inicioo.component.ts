import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-inicioo',
  templateUrl: './inicioo.component.html',
  styleUrls: ['./inicioo.component.css']
})
export class IniciooComponent implements OnInit {

  nombre: String = "Lilian";
  // planetas: =[];
  planetas: PlanetaStarWars[] = [];

  //ctrl +alt y luego ctrl +alt+l
  arregloUsuarios = [
    {
      nombre: "Andrea",
      apellido: "Quimbita",
      conectado: false,
    },
    {
      nombre: "Mashi",
      apellido: "Correo",
      conectado: true
    },
    {
      nombre: "Raquel",
      apellido: "Vega",
      conectado: true
    },
    {
      nombre: "Juan",
      apellido: "Vega",
      conectado: true

    }
  ]

  //servicio http
  //inicia la clase pero el componente no esta listo es decir no puedo usar
  //algunos componenetes El componenete no esta listo
  constructor(private _http: Http) {

  }

  ngOnInit() {
    // this.nombre="Lilian"
    //Aqui si ya esta listo el componente
    //Logica de empezar el componente
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

  cargarPlanetas() {
    //vamos a ingresar tres funciones como parameetros try catch and finally
    this._http.get("http://swapi.co/api/planets").subscribe(
      (response) => {
        console.log("Response", response);
        console.log(response.json());
        let respuesta = response.json();
        console.log(respuesta.next);
        // this.planetas=respuesta.results;
      },
      (error) => {
        console.log("Error", error);
      },
      () => {
        console.log("Finally");

      }
    )
  }

}
   interface PlanetaStarWars{
   name: string;
   rotation_period: string;
   orbital_period: string;
   diameter: string;
   climate: string;
   gravity: string;
   terrain: string;
   surface_water: string;
   population: string;
   residents: string[];
   films: string[];
   created: Date;
   edited: Date;
   url: string;
   }



