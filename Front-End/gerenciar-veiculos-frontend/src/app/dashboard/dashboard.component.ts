import { Component, OnInit } from '@angular/core';
import {LayoutDefaultComponent} from '../layout/layout-default/layout-default.component';

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(public layout: LayoutDefaultComponent) { }

  ngOnInit() {
    this.layout.title = 'Dashboard';
  }
}
