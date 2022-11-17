import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AcademiaComponent } from 'app/modules/admin/academia/academia.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {NgForOf} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

const academiaRoutes: Route[] = [
    {
        path     : '',
        component: AcademiaComponent
    }
];

@NgModule({
    declarations: [
        AcademiaComponent
    ],
    imports: [
        RouterModule.forChild(academiaRoutes),
        MatFormFieldModule,
        MatIconModule,
        MatCardModule,
        ReactiveFormsModule,
        NgIf, NgForOf,
        MatButtonModule
    ]
})
export class AcademiaModule
{
}
