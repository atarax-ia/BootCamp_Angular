import { Component, OnInit } from '@angular/core';
import {Owner} from "./owner";

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {

  public listOwners: Array<Owner> = [];

  constructor() {
    this.listOwners = [new Owner(1,"Pepe"), new Owner(2,"Antonio")];
  }

  ngOnInit(): void {
  }

}
