import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AlumnoComponent } from 'app/modules/admin/alumno/alumno.component';
import {NgForOf} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

const alumnoRoutes: Route[] = [
    {
        path     : '',
        component: AlumnoComponent
    }
];

@NgModule({
    declarations: [
        AlumnoComponent
    ],
    imports: [
        RouterModule.forChild(alumnoRoutes),
        MatCardModule,
        NgForOf,
        MatButtonModule
    ]
})
export class AlumnoModule
{
}
