import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @ViewChild('process', { static: false }) processDiv: ElementRef;

  constructor() { }

  ngOnInit() {
  }


  openDrawer() {
    console.log(this.processDiv)
  }
}
