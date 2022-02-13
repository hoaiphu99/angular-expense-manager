import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ExpenseEntry } from '../expense-entry';
import { ExpenseEntryService } from '../expense-entry.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.component.html',
  styleUrls: ['./edit-entry.component.css'],
})
export class EditEntryComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
