import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import {User} from "../services/user";
import {UsuariosService} from "../services/usuarios.service";

@Component({
  selector: 'usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public parametro: string;
  public listUsers: Array<User> = [];

  constructor(private _route: ActivatedRoute, private _router: Router, private userService: UsuariosService) {
    this.parametro = '';
  }

  ngOnInit(): void {
    this._route.params.forEach( s => {
      this.parametro = s.valueOf().toString();
    });
  }

  public getAllUsers() {
    this.listUsers = [];
    this.userService.allUsers().subscribe(users => {
      this.listUsers = users;
    });
  }

  public getUser(id: string) {
    this.listUsers = [];
    this.userService.findUser(id).subscribe((user: User) => {
      this.listUsers.push(user);
    });
  }

}
