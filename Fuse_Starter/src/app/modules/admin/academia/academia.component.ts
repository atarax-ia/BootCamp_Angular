import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import {FuseConfirmationService} from '../../../../@fuse/services/confirmation';
import {Curso} from '../curso/curso';
import {Alumno} from '../alumno/alumno';

@Component({
    selector     : 'academia',
    templateUrl  : './academia.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AcademiaComponent
{
    public mostrar: boolean = true;

    @Output() nuevoAlumno = new EventEmitter<Alumno>();

    @Output() nuevoCurso = new EventEmitter<Curso>();
    /**
     * Constructor
     */
    constructor(private _fuseConfirmationService: FuseConfirmationService)
    {
    }

    cambiarMostrar(): void {
        this.mostrar = !this.mostrar;
    }

    guardarAlumno(): void {
        const dialogRef = this._fuseConfirmationService.open(
            {
                title: 'Guardar alumno',
                message: '¿Está seguro?',
                actions:{
                    confirm: {
                        label: 'Guardar'
                    }
                }
            }
        );
        dialogRef.afterClosed().subscribe((result) => {
            console.log(result);
            if(result === confirm()) {
                this.nuevoAlumno.emit(new Alumno());
            }
        });
    }

    guardarCurso(): void {
        const dialogRef = this._fuseConfirmationService.open(
            {
                title: 'Guardar curso',
                message: '¿Está seguro?',
                actions:{
                    confirm: {
                        label: 'Guardar'
                    }
                }
            }
        );
        dialogRef.afterClosed().subscribe((result) => {
            console.log(result);
            if(result === confirm()) {
                this.nuevoCurso.emit(new Curso());
            }
        });
    }
}
