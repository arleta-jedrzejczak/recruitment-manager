import { CompanyInterface } from '../company.interface';

import * as fromRoot from '../../state/app.state';
import { CompanyActions, CompanyActionTypes } from './company.actions';

export interface State extends fromRoot.State {
  companies: CompanyState;
}

export interface CompanyState {
  currentCompany: CompanyInterface;
  companies: CompanyInterface[];
}

const initialState: CompanyState = {
  currentCompany: null,
  companies: []
};

export function reducer(state = initialState, action: CompanyActions): CompanyState {
  switch (action.type) {
    case CompanyActionTypes.AddNewCompany:
      return {
        ...state,
        companies: [...state.companies, {...action.payload}]
      };
    default:
      return state;
  }
}
