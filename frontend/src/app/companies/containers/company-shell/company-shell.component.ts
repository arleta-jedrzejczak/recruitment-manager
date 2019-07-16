import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import * as companiesActions from '../../state/company.actions';
import * as fromCompany      from '../../state/company.reducer';


import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { CompanyInterface } from '../../company.interface';

@Component({
  selector: 'app-company-shell',
  templateUrl: './company-shell.component.html',
  styleUrls: ['./company-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyShellComponent implements OnInit {

  companies$: Observable<CompanyInterface[]>;

  constructor(private store: Store<fromCompany.State>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new companiesActions.Load());
    this.companies$ = this.store.pipe(select(fromCompany.getCompanies));
  }

  onAddNewCompany(newCompany: CompanyInterface): void {
    this.store.dispatch(new companiesActions.CreateNewCompany(newCompany));
  }

  onDeleteCompany(id: string): void {
    this.store.dispatch(new companiesActions.DeleteCompany(id));
  }
}
