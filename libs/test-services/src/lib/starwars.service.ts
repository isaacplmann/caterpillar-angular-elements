import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const SWAPI_URL = 'https://swapi.co/api';

@Injectable({ providedIn: 'root' })
export class StarWarsService {
  constructor(private httpClient: HttpClient) {}

  getPeople() {
    return this.httpClient.get(SWAPI_URL + '/people');
  }

  getPersonById(id: number) {
    return this.httpClient.get(`${SWAPI_URL}/people/${id}`);
  }
}
