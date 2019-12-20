import { Component, OnInit, OnDestroy } from '@angular/core';
import { TableDetailService } from './table-detail.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.css']
})
export class TableDetailComponent implements OnInit, OnDestroy {
  tableId;
  currentPage;
  pageChangeSub: Subscription;

  constructor(
    private tDService: TableDetailService,
    private router: Router) { }

  ngOnInit() {
    this.tableId = this.tDService.getCurrentTableId();
    this.pageChangeSub = this.tDService.currentPageUpdated().subscribe(page => this.currentPage = page);
  }

  navigate(to) {
    if (window.location.href.endsWith(to)) {
      return;
    } else {
      const tableId = this.tDService.getCurrentTableId();
      this.router.navigate(['table/detail', tableId, to]);
    }
  }

  ngOnDestroy(){
    this.pageChangeSub.unsubscribe();
  }
}
