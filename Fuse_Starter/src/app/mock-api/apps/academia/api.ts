import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api/mock-api.service';
import { courses as coursesData, students as studentsData } from 'app/mock-api/apps/academia/data';

@Injectable({
    providedIn: 'root'
})
export class AcademiaMockApi
{
    private _courses: any[] = coursesData;
    private _students: any[] = studentsData;

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
        // @ Students - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/apps/academia/alumnos')
            .reply(() => {

                // Clone the courses
                const students = cloneDeep(this._students);

                return [200, students];
            });
    }
}
