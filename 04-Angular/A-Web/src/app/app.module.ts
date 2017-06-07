

import { AppComponent } from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {NgModule} from "@angular/core";
import { EstiloComponent } from './estilo/estilo.component';
import { IniciooComponent } from './Componentes/inicioo/inicioo.component';
import { PlanetasComponent } from './Componentes/planetas/planetas.component';

@NgModule({
  declarations: [
    AppComponent,
    EstiloComponent,
    IniciooComponent,
    PlanetasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [IniciooComponent]
})
export class AppModule { }
