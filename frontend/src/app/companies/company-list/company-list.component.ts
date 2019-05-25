import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromCompany from '../state/company.reducer';
import * as companiesActions from '../state/company.actions';

import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import { CompanyInterface } from '../company.interface';

@AutoUnsubscribe()
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit, OnDestroy {

  companies$: Observable<CompanyInterface[]>;
  companies: CompanyInterface[];

  constructor(private store: Store<fromCompany.State>) { }

  ngOnInit(): void {
    this.companies$ = this.store.pipe(select(fromCompany.getCompanies)) as Observable<CompanyInterface[]>;
    this.store.dispatch(new companiesActions.Load());
    this.companies$.subscribe((val: CompanyInterface[]) => this.companies = val);
  }

  // ngOnDestroy method must be present, even if empty for AutoUnsubscribe
  ngOnDestroy(): void {
  }

}
