import { HttpClient } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { Idetails } from '../classes/Idetails';
import {  HttpErrorResponse } from '@angular/common/http';
import { catchError, tap} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Services{
    private apiUrl = 'https://www.hpb.health.gov.lk/api/get-current-statistical';

    constructor(private http: HttpClient) { }


    getData(): Observable<Idetails[]> {
        return this.http.get<Idetails[]>(this.apiUrl).pipe(
            tap( data => console.log('All:')),
            catchError(this.handleError)
        );
    }
    private handleError( err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          errorMessage = 'An error occured: $(err.error.message)';
        } else {
          errorMessage = 'Server returned code: $(err.status), error message is: $(err.message)';
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }
}