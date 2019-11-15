// Http testing module and mocking controller
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { StarWarsService } from './starwars.service';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs';

describe('StarWarsService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let actions$: Observable<Action>;
  let subscription: Subscription;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockActions(() => actions$)]
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: StarWarsService = TestBed.get(StarWarsService);
    expect(service).toBeTruthy();
  });

  it('should test a reducer', () => {
    // set up mock store state
    // set up mock action
    // run reducer
    // expect a new store state
  });

  it('should test an effect', done => {
    const service: StarWarsService = TestBed.get(StarWarsService);
    actions$ = of({ type: 'someAction' });
    subscription = service.effect$.subscribe(output => {
      expect(output).toEqual({
        type: 'other action'
      });
      done();
    });
  });

  afterEach(() => {
    if (subscription) {
      subscription.unsubscribe();
    }
  });
});
