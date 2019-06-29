import { Injectable }              from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CompanyInterface } from './company.interface';

import { Observable, throwError } from 'rxjs';
import { catchError, tap }        from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class CompaniesService {

  private static readonly COMPANIES_URL = 'http://localhost:3000/api/companies';

  constructor(private httpClient: HttpClient) {
  }

  onGetCompanies(): Observable<CompanyInterface[]> {
    return this.httpClient.get<CompanyInterface[]>(CompaniesService.COMPANIES_URL).pipe(
      catchError(this.onHandleError)
    );
  }

  onCreateCompany(company: CompanyInterface): Observable<CompanyInterface> {
    return this.httpClient.post<CompanyInterface>(CompaniesService.COMPANIES_URL, company).pipe(
      catchError(this.onHandleError)
    );
  }

  private onHandleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    return throwError(errorMessage);
  }
}
