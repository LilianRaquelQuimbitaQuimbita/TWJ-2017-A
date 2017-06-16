import {Component, Input, OnInit} from '@angular/core';
import {HeroeClass} from "../../Clases/HeroeClass";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  @Input() heroes:HeroeClass;

  constructor() {

    console.log("Datos", this.heroes);
  }

  ngOnInit() {
  }

}
