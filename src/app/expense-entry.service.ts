import { Injectable } from '@angular/core';
import { ExpenseEntry } from './expense-entry';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExpenseEntryService {
  private BASE_URL = 'http://localhost:8000';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  httpErrorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error(
        'A client side error occur. The error message is ' + error.message
      );
    } else {
      console.error(
        'An error happened in server. The HTTP status code is ' +
          error.status +
          ' and the error return is ' +
          error.message
      );
    }
    return throwError('Error occurred. Please try again');
  }

  getExpenseEntries(): Observable<ExpenseEntry[]> {
    return this.http
      .get<ExpenseEntry[]>(`${this.BASE_URL}/api/expense`, this.httpOptions)
      .pipe(retry(3), catchError(this.httpErrorHandler));
  }

  getExpenseEntry(id: number): Observable<ExpenseEntry> {
    return this.http
      .get<ExpenseEntry>(`${this.BASE_URL}/api/expense/${id}`, this.httpOptions)
      .pipe(retry(3), catchError(this.httpErrorHandler));
  }

  addExpenseEntry(expenseEntry: ExpenseEntry): Observable<ExpenseEntry> {
    return this.http
      .post<ExpenseEntry>(
        `${this.BASE_URL}/api/expense`,
        expenseEntry,
        this.httpOptions
      )
      .pipe(retry(3), catchError(this.httpErrorHandler));
  }

  updateExpenseEntry(expenseEntry: ExpenseEntry): Observable<ExpenseEntry> {
    return this.http
      .put<ExpenseEntry>(
        `${this.BASE_URL}/api/expense/${expenseEntry.id}`,
        expenseEntry,
        this.httpOptions
      )
      .pipe(retry(3), catchError(this.httpErrorHandler));
  }

  deleteExpenseEntry(
    expenseEntry: ExpenseEntry | number
  ): Observable<ExpenseEntry> {
    const id = typeof expenseEntry == 'number' ? expenseEntry : expenseEntry.id;
    const url = `${this.BASE_URL}/api/expense/${id}`;

    return this.http
      .delete<ExpenseEntry>(url, this.httpOptions)
      .pipe(retry(3), catchError(this.httpErrorHandler));
  }
}
