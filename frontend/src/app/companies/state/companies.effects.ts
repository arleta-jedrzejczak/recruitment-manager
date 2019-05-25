import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { CompaniesService } from '../companies.service';

import * as companiesActions from './company.actions';

import { mergeMap, map } from 'rxjs/operators';

import { CompanyInterface } from '../company.interface';


@Injectable()
export class CompaniesEffects {
  constructor(private actions$: Actions,
              private companiesService: CompaniesService) {
  }
  @Effect()
  loadedCompanies$ = this.actions$.pipe(
    ofType(companiesActions.CompanyActionTypes.Load),
    mergeMap((action: companiesActions.Load) => this.companiesService.getCompanies().pipe(
      map((companies: CompanyInterface[]) => new companiesActions.LoadSuccess(companies))
    )
  ));
}
