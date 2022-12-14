import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Curso} from './curso';
import {CursoService} from './curso.service';
import {FuseConfirmationModule, FuseConfirmationService} from '@fuse/services/confirmation';



@Component({
    selector     : 'curso',
    templateUrl  : './curso.component.html',
    styleUrls    : ['/curso.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class CursoComponent implements OnInit
{
    public cursos: Array<Curso>;
    /**
     * Constructor
     */
    constructor(private _cursoService: CursoService, private _fuseConfirmationService: FuseConfirmationService)
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
            if(result === 'confirmed') {
                this._cursoService.getCursos().subscribe((data) => {
                    this.cursos = data;
                    console.log(this.cursos);

                });
            }
        });
    }
}
