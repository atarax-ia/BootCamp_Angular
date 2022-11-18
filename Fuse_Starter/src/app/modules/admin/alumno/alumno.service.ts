import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import  { Alumno } from './alumno';
import {BehaviorSubject, map, Observable, switchMap, take, tap} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AlumnoService {

    private _alumno: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor(private http: HttpClient) {
    }

    public getAlumnos(): Observable<any> {
        return this.http.get<Alumno[]>('api/apps/academia/alumnos').pipe(
            tap((response: Alumno[]) => {
                this._alumno.next(response);
            })
        );
    }

    public addAlumno(alumno: Alumno): Observable<any> {
        return this.http.post<Alumno>('api/apps/academia/alumnos', alumno);
    }
}
