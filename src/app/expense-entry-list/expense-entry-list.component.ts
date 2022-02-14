import { Component, OnInit } from '@angular/core';
import { ExpenseEntry } from '../expense-entry';
import { DebugService } from '../debug.service';
import { ExpenseEntryService } from '../expense-entry.service';

@Component({
  selector: 'app-expense-entry-list',
  templateUrl: './expense-entry-list.component.html',
  styleUrls: ['./expense-entry-list.component.css'],
  providers: [DebugService],
})
export class ExpenseEntryListComponent implements OnInit {
  title: string;
  expenseEntries: ExpenseEntry[];
  displayedColumns: string[] = [
    'item',
    'amount',
    'category',
    'location',
    'spendOn',
  ];

  constructor(
    private debugService: DebugService,
    private expenseEntryService: ExpenseEntryService
  ) {}

  ngOnInit() {
    this.debugService.info('Expense Entry List component initialized');
    this.title = 'Expense Entry List';
    this.getExpenseEntries();
  }

  getExpenseEntries() {
    this.expenseEntryService
      .getExpenseEntries()
      .subscribe((data) => (this.expenseEntries = data));
  }

  deleteExpenseEntry(evt, id) {
    evt.preventDefault();
    if (confirm('Are you sure to delete the entry')) {
      this.expenseEntryService
        .deleteExpenseEntry(id)
        .subscribe((data) => console.log(data));
      this.getExpenseEntries();
    }
  }
}
