import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
import { DebugComponent } from './debug/debug.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ExpenseEntryComponent,
    ExpenseEntryListComponent,
    DebugComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
