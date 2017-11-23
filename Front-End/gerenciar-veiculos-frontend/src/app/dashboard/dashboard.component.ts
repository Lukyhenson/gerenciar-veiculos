import { Component, OnInit } from '@angular/core';
import {LayoutDefaultComponent} from '../layout/layout/layout.component';

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(public layout: LayoutDefaultComponent) { }

  ngOnInit() {
    this.layout.title = 'Dashboard';
  }
}
