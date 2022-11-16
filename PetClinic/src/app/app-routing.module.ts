import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OwnersComponent} from "./owners/owners.component";
import {PetsComponent} from "./pets/pets.component";

const routes: Routes = [
  {path: 'mascota', component: PetsComponent},
  {path: '', component: OwnersComponent},
  {path: '**', component: OwnersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
