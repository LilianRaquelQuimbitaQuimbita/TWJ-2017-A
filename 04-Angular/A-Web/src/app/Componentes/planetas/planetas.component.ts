import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {
  planetas: PlanetaStarWars[] = [];

  constructor(private _http: Http) {
  }

  ngOnInit() {
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
