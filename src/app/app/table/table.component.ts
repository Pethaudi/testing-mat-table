import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { ViewChild, Component, OnInit } from "@angular/core";

export interface PeriodicElement {
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1 },
  { position: 2 },
  { position: 3 },
  { position: 4 },
  { position: 5 },
  { position: 6 },
  { position: 7 },
  { position: 8 },
  { position: 9 },
  { position: 10 }
];

@Component({
  selector: "app-table",
  styleUrls: ["table.component.css"],
  templateUrl: "table.component.html"
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;

  @ViewChild(MatSort, { static: true })
  sort: MatSort;

  displayedColumns: string[] = ["position"];
  dataSource = new MatTableDataSource();

  ngOnInit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
