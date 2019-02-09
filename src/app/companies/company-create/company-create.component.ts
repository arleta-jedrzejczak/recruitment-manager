import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { CompanyInterface } from '../company.interface';

import { Store, select } from '@ngrx/store';

import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import { Subscription } from 'rxjs';

import * as fromCompany from '../state/company.reducer';

@AutoUnsubscribe()
@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.scss']
})
export class CompanyCreateComponent implements OnInit, OnDestroy {

  companysForm = new FormGroup({
    newCompanyName: new FormControl(''),
    newCompanyDescription: new FormControl(''),
  });
  onSubscriptionNewCompany: Subscription;

  constructor(private store: Store<fromCompany.State>) { }

  ngOnInit() {
  }

  onAddNewCompany(company: CompanyInterface): void {
    this.store.dispatch({
      type: 'ADD_NEW_COMAPNY',
      payload: company
    });
    this.onSubscriptionNewCompany = this.store.pipe(select('companies')).subscribe(
      (companies: fromCompany.CompanyState) => {
        console.log(companies);
      }
    );
  }

  // ngOnDestroy method must be present, even if empty for AutoUnsubscribe
  ngOnDestroy(): void {
  }

}
