import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { CompaniesService } from '../companies.service';

import * as companiesActions from './company.actions';

import { mergeMap, map, catchError } from 'rxjs/operators';

import { CompanyInterface } from '../company.interface';
import { Observable, of }   from 'rxjs';
import { Action }           from '@ngrx/store';


@Injectable()
export class CompaniesEffects {
  constructor(private actions$: Actions,
              private companiesService: CompaniesService) {
  }
  @Effect()
  loadedCompanies$: Observable<Action> = this.actions$.pipe(
    ofType(companiesActions.CompanyActionTypes.Load),
    mergeMap((action: companiesActions.Load) => this.companiesService.onGetCompanies().pipe(
      map((companies: CompanyInterface[]) => new companiesActions.LoadSuccess(companies))
    )
  ));

  @Effect()
  createCompany$: Observable<Action> = this.actions$.pipe(
    ofType(companiesActions.CompanyActionTypes.CreateNewCompany),
    map((action: companiesActions.CreateNewCompany) => action.payload),
    mergeMap((company: CompanyInterface) =>
      this.companiesService.onCreateCompany(company).pipe(
        map(newCompany => (new companiesActions.CreateCompanySuccess(newCompany))),
        catchError(err => of(new companiesActions.CreateCompanyFail(err)))
      )
    )
  );
}
