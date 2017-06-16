import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    InicioComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [InicioComponent]
})
export class AppModule { }
