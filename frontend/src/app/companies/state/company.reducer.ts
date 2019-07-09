import { CompanyInterface } from '../company.interface';

import * as fromRoot from '../../state/app.state';

import { CompanyActions, CompanyActionTypes } from './company.actions';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
  companies: CompanyState;
}

export interface CompanyState {
  currentCompany: CompanyInterface;
  companies: CompanyInterface[];
  error: string;
}

const initialState: CompanyState = {
  currentCompany: null,
  companies: [],
  error: ''
};

const getCompaniesFeatureState = createFeatureSelector<CompanyState>('companies');

export const getCompanies = createSelector(
  getCompaniesFeatureState,
  state => state.companies
);

export function reducer(state = initialState, action: CompanyActions): CompanyState {
  switch (action.type) {
    // CREATE
    case CompanyActionTypes.CreateCompanySuccess:
      return {
        ...state,
        companies: [...state.companies, {...action.payload}]
      };
    case CompanyActionTypes.CreateCompanyFail:
      return {
        ...state,
        error: action.payload
      };
    //  LOAD
    case CompanyActionTypes.LoadSuccess:
      return {
        ...state,
        companies: action.payload,
        error: ''
      };
    case CompanyActionTypes.LoadFail:
      return {
        ...state,
        companies: [],
        error: action.payload
      };
    //  DELETE
    case CompanyActionTypes.DeleteCompanySuccess:
      return {
        ...state,
        companies: state.companies.filter(product => product.id !== action.payload),
        error: ''
      };
    case CompanyActionTypes.DeleteCompanyFail:
      return {
        ...state,
        error: action.payload
      };
    //  DEFAULT
    default:
      return state;
  }
}
