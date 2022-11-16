import { Component, OnInit } from '@angular/core';
import {Pet} from "./pet";
import {Owner} from "../owners/owner";

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  public listPets: Array<Pet> = [];

  constructor() {
    this.listPets = [new Pet(1, "Mickey", new Owner(1,"Pepe")), new Pet(2, "Donald", new Owner(2,"Antonio"))];
  }

  ngOnInit(): void {
  }

}
