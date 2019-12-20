import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableDetailService {
  postUpdatedSub: Subscription;

  constructor(private http: HttpClient) {

  }

  addData(name: string, description: string) {
    this.http.post('http://localhost:3000/api/table/details', { name, description })
      .subscribe(result => {

      });
  }
}
