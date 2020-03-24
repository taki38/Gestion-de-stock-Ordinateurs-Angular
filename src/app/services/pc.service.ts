import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pc } from '../models/pc';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class PcService {
  marqueDisponible= ['Dell', 'HP', 'Apple' , 'Asus'];
  typeDisponible= ['Portable', 'Fixe', 'Tablette Hybride'];
  categoryDisponible= ['Gaming', 'Bureautique', 'Premier prix'];
  urlApi = 'http://localhost:3000/pc';
  result: number;

  constructor(private httpClient: HttpClient) { }

  add(pc: Pc): Observable<Pc> {
    pc.dateEntreStock = new Date();
    return this.httpClient.post<Pc>(this.urlApi, pc).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  
  getAll(): Observable<Pc[]> {
    return this.httpClient.get<Pc[]>(this.urlApi).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getPcById(id: number): Observable<Pc> {
    return this.httpClient.get<Pc>(this.urlApi + '/' + id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  supprime(pc: Pc): Observable<Pc> {
    return this.httpClient.delete<Pc>(this.urlApi + '/' + pc.id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  editPc(pc: Pc): Observable<Pc> {
    return this.httpClient.put<Pc>(this.urlApi + '/' + pc.id, pc).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  


  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }





}
