import {Component, Output, EventEmitter, ViewEncapsulation, Input} from '@angular/core';
import {FuseConfirmationService} from '../../../../@fuse/services/confirmation';
import {Curso} from '../curso/curso';
import {Alumno} from '../alumno/alumno';
import {AlumnoComponent} from '../alumno/alumno.component';
import {CursoComponent} from '../curso/curso.component';
import {AlumnoService} from "../alumno/alumno.service";
import {CursoService} from "../curso/curso.service";

@Component({
    selector     : 'academia',
    templateUrl  : './academia.component.html',
    styleUrls    : ['./academia.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AcademiaComponent
{
    public mostrar: boolean = true;

    public nuevoAlumnoId: string;
    public nuevoAlumnoName: string;
    public nuevoAlumnoEmail: string;
    public nuevoAlumnoCity: string;
    public nuevoAlumnoZipcode: string;
    public nuevoAlumnoPhone: string;

    public nuevoCursoId: string;
    public nuevoCursoTitle: string;
    public nuevoCursoDescription: string;
    public nuevoCursoCategory: string;
    public nuevoCursoDuration: string;

    /**
     * Constructor
     */
    constructor(
        private _alumnoService: AlumnoService,
        private _cursoService: CursoService,
        private _fuseConfirmationService: FuseConfirmationService)
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
            if(result === 'confirmed') {
                this._alumnoService.addAlumno(
                    new Alumno(
                        Number(this.nuevoAlumnoId),
                        this.nuevoAlumnoName,
                        this.nuevoAlumnoEmail,
                        this.nuevoAlumnoCity,
                        this.nuevoAlumnoZipcode,
                        this.nuevoAlumnoPhone
                    )
                );
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
            if(result === 'confirmed') {
                this._cursoService.addCurso(
                    new Curso(
                        this.nuevoCursoId,
                        this.nuevoCursoTitle,
                        this.nuevoCursoDescription,
                        this.nuevoCursoDescription,
                        Number(this.nuevoCursoDuration)
                    )
                );
            }
        });
    }
}
