import { Component, OnInit } from '@angular/core';
import {SeriesInterface} from "../../Interfaces/Series";
import {Http} from "@angular/http";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  series: SeriesInterface[] = [];

  constructor(private _http: Http) {
  }

  ngOnInit() {

    this._http
      .get("http://api.themoviedb.org/3/discover/movie?%20%E2%86%B5%20sort_by=popularity.desc%3F&api_key=a57c1df94fab8edbe478896b56fa40a1")
      //.map(response=>response.json()
      .subscribe(
        (response)=>{
          console.log("Response:",response);

          console.log(response.json());

          let respuesta = response.json();

          console.log(respuesta.next);

          this.series = respuesta.results;

        },
        (error)=>{
          console.log("Error:",error);
        },
        ()=>{
          console.log("Finally");
        }

      )
  }

}
