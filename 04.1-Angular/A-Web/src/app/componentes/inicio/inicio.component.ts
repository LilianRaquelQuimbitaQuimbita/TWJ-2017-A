import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";

import 'rxjs/add/operator/map';
import {PlanetaStarWarsInterface} from "app/Interfaces/PlanetaStarWars";
import {UsuarioClass} from "../../Clases/UsuarioClass";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre: string = "Lilian";

  usuarios:UsuarioClass [] = [];
  nuevoUsuario:UsuarioClass =new UsuarioClass("");
  planetas : PlanetaStarWarsInterface[] = [];

  arregloUsuarios = [
    {
      nombre : "Lilian",
      apellido : "Quimbita",
      conectado:true
    }, {
      nombre: "Mashi",
      apellido: "Correa",
      conectado:true
    }, {
      nombre: "Abdala",
      apellido: "Bucaram",
      conectado:false
    }, {
      nombre: "Juan Jose",
      apellido: "Flores",
      conectado:true
    }];

  constructor(private _http:Http) {
    //Inicia la clase
    //PERO EL COMPONENTE NO ESTA LISTO!!!!
  }
  ngOnInit() {

    //para ver que se esta guardadndo el el nuevo usuario
    //console.log('Nuevo Ususario ',this.nuevoUsuario);
    this._http.get("http://localhost:1337/Usuario").subscribe(
      respuesta=>{
        let rjson:UsuarioClass[] =respuesta.json();
        this.usuarios=rjson;
        console.log("Usuarios: ",this.usuarios);
      },
      error=>{
        console.log("Error",error)
      }
    )
    console.log('Nuevo Usuario: ',this.nuevoUsuario)
  }
  cambiarNombre(): void {
    console.log("Entro");

    this.nombre = "Rafico a Lenin";

  }

  cambiarOtroNombre() {
    this.nombre = "Lenin a Rafico";
  }

  cambiarNombreInput(nombreEtiqueta) {
    console.log(nombreEtiqueta.value);
    console.log(nombreEtiqueta.type);
    console.log(nombreEtiqueta.placeholder);
    this.nombre = nombreEtiqueta.value;
  }

  crearUsuario()
  {
    console.log("Entro a crear Usuario");
    /*let usuario:UsuarioClass ={
      nombre:this.nuevoUsuario.nombre
    };*/
    this._http.post("http://localhost:1337/Usuario",this.nuevoUsuario).subscribe(respuesta=>{
      let respuestaJson = respuesta.json();
      console.log('respuestaJson: ',respuestaJson);
      this.usuarios.push(respuestaJson)
    },
    error=>{
      console.log("Error ",error);
    }
    )
    //el subscribe me sirve para los rquest
  }
  eliminarUsuario(usuario: UsuarioClass, indice: number) {

    //console.log("Indice:", this.usuarios.indexOf(usuario));
    //console.log("Indice con index: ", indice);
    //console.log("Usuarios : ", this.usuarios);
    //console.log("Usuario con id : ", usuario.id);

    this.usuarios.splice(indice,1);

    this._http.delete("http://localhost:1337/Usuario?id="+usuario.id)
      .subscribe(respuesta=>{
          let respuestaJson=respuesta.json();
          console.log('respuesta: ',respuestaJson);
        },
        error=>{
          console.log("Error ", error)
        }
      )

  }

  cargarPlanetas(){
    this._http
      .get("http://swapi.co/api/planets")
      //.map(response=>response.json()
      .subscribe(
        (response)=>{
          console.log("Response:",response);

          console.log(response.json());

          let respuesta = response.json();

          console.log(respuesta.next);

          this.planetas = respuesta.results;

          this.planetas = this.planetas.map(
            (planeta)=>{

              planeta.imagenURL = "/assets/Imagenes/"+planeta.name+'.jpg';

              return planeta;
            }
          );

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

/*class UsuarioClass{
  nombre:string;
  constructor(nombre?:string)
  {
    this.nombre=nombre;

  }
}
*/
