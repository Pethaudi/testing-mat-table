import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
	position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
	{ position: 1 },
	{ position: 2 },
	{ position: 3 },
	{ position: 4 },
	{ position: 5},
	{ position: 6 },
	{ position: 7},
	{ position: 8 },
	{ position: 9 },
	{ position: 10},
];

@Component({
	selector: 'app-root',
	template: "<app-table></app-table>", /*`
<div id="body"  class="mat-elevation-z8">
	<mat-paginator [pageSizeOptions]="[5, 10, 25, 100]"></mat-paginator>

	<table mat-table [dataSource]="dataSource" matSort>

		<!-- Position Column -->
		<ng-container matColumnDef="position">
			<th mat-header-cell *matHeaderCellDef mat-sort-header appChange> No. </th>
			<td mat-cell *matCellDef="let element"> {{element.position}}
			</td>
		</ng-container>

		<tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
		<tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
	</table>
</div>`*/
})
export class AppComponent {
	@ViewChild(MatPaginator, {static: true})
	paginator: MatPaginator;

	@ViewChild(MatSort, {static: true })
	sort: MatSort;

	displayedColumns: string[] = ['position'];
	dataSource = new MatTableDataSource();

	ngOnInit() {
		this.dataSource = new MatTableDataSource(ELEMENT_DATA);
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}
}
