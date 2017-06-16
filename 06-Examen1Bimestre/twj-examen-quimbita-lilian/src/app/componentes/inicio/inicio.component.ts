import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {HeroeClass} from "../../Clases/HeroeClass";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  heroes:HeroeClass [] = [];
  nuevoheroe:HeroeClass =new HeroeClass();

  constructor(private _http:Http) { }

  ngOnInit() {
    this._http.get("http://localhost:1337/Heroe/").subscribe(
      respuesta=>{
        let rjson:HeroeClass[] =respuesta.json();
        this.heroes=rjson;
        console.log("Heroes: ",this.heroes);
      },
      error=>{
        console.log("Error",error)
      }
    );
    console.log('Heroes: ',this.heroes)
  }

  crearHeroe()
  {
    console.log("Entro a crear Heroe");
    this._http.post("http://localhost:1337/Heroe/",this.nuevoheroe).subscribe(respuesta=>{
        let respuestaJson = respuesta.json();
        console.log('respuestaJson: ',respuestaJson);
        this.heroes.push(respuestaJson)
      },
      error=>{
        console.log("Error ",error);
      }
    )
    //el subscribe me sirve para los rquest
  }

}
