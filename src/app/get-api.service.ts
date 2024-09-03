import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private _http: HttpClient) { }

  getData<T>(url: string): Observable<T[]> {
    return this._http.get<T[]>(url).pipe(
      map((data: any) => {
        // Handle data if it has a specific structure
        if (data && data.users) {
          return data.users as T[];
        }
        return [];
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error occurred:', error.message);
        return throwError(() => new Error('Failed to load data'));
      })
    );
  }
}
