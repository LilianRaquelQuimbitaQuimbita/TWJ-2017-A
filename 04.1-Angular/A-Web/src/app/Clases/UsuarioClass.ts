export class UsuarioClass{
  //nombre:string;
  constructor(public nombre?:string,
              public id?:number,
              public createdAt?:Date,
              public updateAt?:Date)
  {
    this.nombre=nombre;
    this.id=id;
    this.createdAt=createdAt;
    this.updateAt=updateAt;

  }
}
