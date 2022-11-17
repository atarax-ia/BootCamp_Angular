import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CursoComponent } from 'app/modules/admin/curso/curso.component';
import {MatCardModule} from '@angular/material/card';
import {NgForOf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

const cursoRoutes: Route[] = [
    {
        path     : '',
        component: CursoComponent
    }
];

@NgModule({
    declarations: [
        CursoComponent
    ],
    imports: [
        RouterModule.forChild(cursoRoutes),
        MatCardModule,
        NgForOf,
        MatButtonModule
    ]
})
export class CursoModule
{
}
