import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Subscription } from 'rxjs';

import * as fromCompany from '../state/company.reducer';

import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import { CompanyInterface } from '../company.interface';

@AutoUnsubscribe()
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit, OnDestroy {

  companies: CompanyInterface[];
  onSubscriptionNewCompany: Subscription;

  constructor(private store: Store<fromCompany.State>) { }

  ngOnInit(): void {
    this.onSubscriptionNewCompany = this.store.pipe(select('companies')).subscribe(
      (companies: fromCompany.CompanyState) => {
        if (companies) {
          this.companies = companies.companies;
        }
      }
    );
  }

  // ngOnDestroy method must be present, even if empty for AutoUnsubscribe
  ngOnDestroy(): void {
  }

}
