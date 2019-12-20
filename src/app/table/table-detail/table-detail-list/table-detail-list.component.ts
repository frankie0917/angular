import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { TableDetailService } from '../table-detail.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-table-detail-list',
  templateUrl: './table-detail-list.component.html',
  styleUrls: ['./table-detail-list.component.css']
})
export class TableDetailListComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  tableDataSub: Subscription;
  tableDatas;
  displayedColumns = [];
  dataSource;

  constructor(private tDService: TableDetailService) {}

  ngOnInit() {
    this.tDService.getTableDatas();
    this.tableDataSub =  this.tDService.tableDataUpdated().subscribe(result=>{

      this.tableDatas = result;
      this.dataSource = new MatTableDataSource(this.tableDatas);
      this.dataSource.paginator = this.paginator;

      for (const key in result[0]) {
        if (key.startsWith("_")) {
          continue;
        } else {
          this.displayedColumns.push(key);
        }
      }
    })
  }

  applyFilter(keyWord){
    this.dataSource.filter = keyWord.trim().toLowerCase();
  }

  ngOnDestroy(){
    this.tableDataSub.unsubscribe();
  }

}
