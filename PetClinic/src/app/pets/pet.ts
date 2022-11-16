import {Owner} from "../owners/owner";

export class Pet {
  public id: number;
  public nombre: string ;
  public duenyo: Owner;

  constructor(id: number, nombre: string, d: Owner) {
    this.id = id;
    this.nombre = nombre;
    this.duenyo = d;
  }

}
