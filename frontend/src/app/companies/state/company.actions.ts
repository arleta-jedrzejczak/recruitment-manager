import { Action } from '@ngrx/store';

import { CompanyInterface } from '../company.interface';

export enum CompanyActionTypes {
  AddNewCompany = '[Company] Add New Company',
  Load = '[Company] Load Companies',
  LoadSuccess = '[Company] Load Companies Success',
  LoadFail = '[Company] Load Companies Fails'
}

export class AddNewCompany implements Action {
  readonly type = CompanyActionTypes.AddNewCompany;

  constructor(public payload: CompanyInterface) { }
}

export class Load implements Action {
  readonly type = CompanyActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = CompanyActionTypes.LoadSuccess;

  constructor(public payload: CompanyInterface[]) { }
}

export class LoadFail implements Action {
  readonly type = CompanyActionTypes.LoadFail;

  constructor(public payload: string) { }
}

export type CompanyActions = AddNewCompany |
                             Load |
                             LoadSuccess |
                             LoadFail;
