import { Component, OnInit } from '@angular/core';

import { ExpenseEntry } from '../expense-entry';

@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: ['./expense-entry.component.css'],
})
export class ExpenseEntryComponent implements OnInit {
  title: string;
  expenseEntry: ExpenseEntry;

  constructor() {}

  ngOnInit() {
    this.title = 'Expense Entry';
  }

  show(): void {
    console.log('Clicked');
  }
}
