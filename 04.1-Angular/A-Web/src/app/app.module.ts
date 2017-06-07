import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PlanetaStarWarsComponent } from './componentes/planeta-star-wars/planeta-star-wars.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PlanetaStarWarsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [InicioComponent]
})
export class AppModule { }
