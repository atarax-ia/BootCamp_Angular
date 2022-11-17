import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FuseConfirmationService} from '../../../../@fuse/services/confirmation';
import {Alumno} from '../alumno/alumno';
import {AlumnoService} from './alumno.service';

@Component({
    selector     : 'alumno',
    templateUrl  : './alumno.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AlumnoComponent implements OnInit
{
    public alumnos: Array<Alumno>;
    /**
     * Constructor
     */
    constructor(private _alumnoService: AlumnoService, private _fuseConfirmationService: FuseConfirmationService)
    {
    }

    ngOnInit(): void {
        const dialogRef = this._fuseConfirmationService.open(
            {
                title: 'Listar',
                message: '¿Seguro?',
                actions:{
                    confirm: {
                        label: 'Listar'
                    }
                }
            }
        );
        dialogRef.afterClosed().subscribe((result) => {
            console.log(result);
        });
        this._alumnoService.getAlumnos().subscribe(data => this.alumnos = data);
        console.log(this.alumnos);
    }
}
