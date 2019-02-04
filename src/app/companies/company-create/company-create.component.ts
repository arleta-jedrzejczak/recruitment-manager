import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.scss']
})
export class CompanyCreateComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.addNewCompany('company');
  }

  addNewCompany(company: any): void {
    this.store.dispatch({
      type: 'ADD_NEW_COMAPNY',
      payload: company
    });
    this.store.pipe(select('companies')).subscribe(
      (com: any) => {
        console.log(com);
      }
    );
  }

}
