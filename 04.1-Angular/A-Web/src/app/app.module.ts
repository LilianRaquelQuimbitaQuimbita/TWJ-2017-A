import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PlanetaStarWarsComponent } from './componentes/planeta-star-wars/planeta-star-wars.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { ClimateComponent } from './componentes/planeta-star-wars/Componentes Planeta-start-wars/climate/climate.component';
import { DiameterComponent } from './componentes/planeta-star-wars/Componentes Planeta-start-wars/diameter/diameter.component';
import { GravityComponent } from './componentes/planeta-star-wars/Componentes Planeta-start-wars/gravity/gravity.component';
import { OrbitalPeriodComponent } from './componentes/planeta-star-wars/Componentes Planeta-start-wars/orbital-period/orbital-period.component';
import { TerrainComponent } from './componentes/planeta-star-wars/Componentes Planeta-start-wars/terrain/terrain.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PlanetaStarWarsComponent,
    ClimateComponent,
    DiameterComponent,
    GravityComponent,
    OrbitalPeriodComponent,
    TerrainComponent,
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
