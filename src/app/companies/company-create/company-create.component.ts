import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Store, select } from '@ngrx/store';

import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import { Subscription } from 'rxjs';

@AutoUnsubscribe()
@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.scss']
})
export class CompanyCreateComponent implements OnInit, OnDestroy {

  // FIXME: add interface and strongly typing to newCompany
  newCompany: any = new FormControl('');
  onSubscriptionNewCompany: Subscription;

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  onAddNewCompany(company: any): void {
    this.store.dispatch({
      type: 'ADD_NEW_COMAPNY',
      payload: company
    });
    this.onSubscriptionNewCompany = this.store.pipe(select('companies')).subscribe(
      (com: any) => {
        console.log(com);
      }
    );
  }

  // ngOnDestroy method must be present, even if empty for AutoUnsubscribe
  ngOnDestroy(): void {
  }

}
