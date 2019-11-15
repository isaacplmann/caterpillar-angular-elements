import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export const SWAPI_URL = 'https://swapi.co/api';

@Injectable({ providedIn: 'root' })
export class StarWarsService {
  @Effect() effect$ = this.actions$.pipe(
    ofType('someAction'),
    map(action => ({
      type: 'other action'
    })),
    tap(x => console.log(x))
  );

  constructor(private httpClient: HttpClient, private actions$: Actions) {}

  getPeople() {
    return this.httpClient.get(SWAPI_URL + '/people');
  }

  getPersonById(id: number) {
    return this.httpClient.get(`${SWAPI_URL}/people/${id}`);
  }
}
