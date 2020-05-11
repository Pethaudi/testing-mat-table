import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		NoopAnimationsModule,
		MatTableModule,
		MatSortModule,
		MatPaginatorModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
