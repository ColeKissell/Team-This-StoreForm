import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {Show} from './models/show';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', })
};

@Injectable({ providedIn: 'root'})
export class ShowService {

  private showsUrl = 'https://hapi-practice-uodxjalzjs.now.sh/shows';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
// get shows from server
  getShows():Observable<Show[]>{
    return this.http.get<Show[]>(this.showsUrl)
    .pipe(
      tap(shows => this.log('fetched shows')),
      catchError(this.handleError('getShows',[]))
    )
  }
  /** GET hero by id. Return `undefined` when id not found */
  getShowNo404<Data>(id): Observable<Show> {
    const url = `${this.showsUrl}/${id}`;
    return this.http.get<Show[]>(url)
      .pipe(
        map(shows => shows[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} show id=${id}`);
        }),
        catchError(this.handleError<Show>(`getShow id=${id}`))
      );
  }
// get show by id. will 404 if id not found
  getShow(id): Observable<Show> {
    
    const url = `${this.showsUrl}/${id}`;
    return this.http.get<Show>(url).pipe(
      tap(_ => this.log(`fetched show id=${id}`)),
      catchError(this.handleError<Show>(`getShow id=${id}`))
    );
  }
// git shows whose name contains search term
  searchShows(term: string): Observable<Show[]> {
    if (!term.trim()) {
      // if not search term, return empty array.
      return of([]);
    }
    return this.http.get<Show[]>(`${this.showsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found shows matching "${term}"`)),
      catchError(this.handleError<Show[]>('searchShows', []))
    );
  }

  /////////// Save Methods ///////////
  // post: add new show to server
  addShow (show: Show): Observable<Show> {
    return this.http.post<Show>(this.showsUrl, show, httpOptions).pipe(
      tap((show: Show) => this.log(`added show w/ id=${show._id}`)),
      catchError(this.handleError<Show>('addShow'))
    );
  }
  // delete: delete the show from server
  deleteShow (show: Show | string): Observable<Show> {
    const id = typeof show === 'string' ? show : show._id;
    const url = `${this.showsUrl}/${id}`;
  
    return this.http.delete<Show>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted show id=${id}`)),
      catchError(this.handleError<Show>('deleteShow'))
    );
  }
  // put: update show on server
  updateShow (show: Show): Observable<any> {
    return this.http.patch(this.showsUrl, show, httpOptions).pipe(
      tap(_ => this.log(`updated show id=${show._id}`)),
      catchError(this.handleError<any>('updateShow')));

  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  // log a ShowService message with the MessageService
  private log(message: string) {
    this.messageService.add(`ShowService: ${message}`);
  }
}

