import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api/mock-api.service';
import { courses as coursesData, students as studentsData } from 'app/mock-api/apps/academia/data';
import {Alumno} from '../../../modules/admin/alumno/alumno';
import {Curso} from '../../../modules/admin/curso/curso';

@Injectable({
    providedIn: 'root'
})
export class AcademiaMockApi
{
    private _courses: Curso[] = coursesData;
    private _students: Alumno[] = studentsData;

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Courses - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/academia/cursos')
            .reply(() => {

                // Clone the courses
                const courses = cloneDeep(this._courses);

                return [200, courses];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Courses - POST
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPost('api/apps/academia/cursos')
            .reply(({request}) => {

                // Get the message
                const newCourse: Curso = cloneDeep(request.body.message);
                console.log(newCourse);

                // Unshift the new message
                this._courses.push(newCourse);

                // Return the response
                return [200, newCourse];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Students - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/academia/alumnos')
            .reply(() => {

                // Clone the courses
                const students = cloneDeep(this._students);

                return [200, students];
            });


        // -----------------------------------------------------------------------------------------------------
        // @ Students - POST
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPost('api/apps/academia/alumnos')
            .reply(({request}) => {

                // Get the message
                const newStudent: Alumno = cloneDeep(request.body.message);
                console.log(newStudent);

                // Unshift the new message
                this._students.push(newStudent);

                // Return the response
                return [200, newStudent];
            });
    }
}
