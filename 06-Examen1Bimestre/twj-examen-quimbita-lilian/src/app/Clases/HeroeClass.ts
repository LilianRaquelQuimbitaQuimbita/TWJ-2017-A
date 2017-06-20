export class HeroeClass{

  constructor(public id?:number,
              public nombre?:string,
              public castillo?:string,
              public nivel?:number,
              public createdAt?:Date,
              public updateAt?:Date)
  {
    this.id=id;
    this.nombre=nombre;
    this.castillo=castillo;
    this.nivel=nivel;
    this.createdAt=createdAt;
    this.updateAt=updateAt;

  }
}
