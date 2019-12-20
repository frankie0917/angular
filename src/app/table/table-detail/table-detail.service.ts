import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableDetailService {
  tableDataUpdateSub = new Subject();
  currentPageSub = new Subject();
  constructor(
    private http: HttpClient,
    private router: Router) {

    this.router.events.subscribe(result => {
      if (result instanceof NavigationEnd) {
        const arr = result.url.split('/');
        const currentPage = arr[arr.length - 1];
        this.currentPageSub.next(currentPage);
      }
    });
  }

  getCurrentTableId() {
    return this.router.url.split('/')[3];
  }

  addData(name: string, description: string) {
    this.http.post('http://localhost:3000/api/table/details', { name, description })
      .subscribe(result => {
        this.getTableDatas();
      });
  }

  tableDataUpdated() {
    return this.tableDataUpdateSub.asObservable();
  }

  getCurrentPge() {
    const arr = this.router.url.split('/');
    const currentPage = arr[arr.length - 1];
    this.currentPageSub.next(currentPage);
  }

  currentPageUpdated() {
    return this.currentPageSub.asObservable();
  }

  getTableDatas() {
    this.http.get('http://localhost:3000/api/table/details').subscribe(result => {

      this.tableDataUpdateSub.next(result.tableDatas);
    });
  }
}
