import { Component, OnInit ,Input} from '@angular/core';
import {SeriesInterface} from "../../Interfaces/Series";

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  @Input() series:SeriesInterface;
  constructor() {
    console.log('Serie :',this.series);
  }

  ngOnInit() {
  }

}
