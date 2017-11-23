import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs/Subject';

import {DATATABLE_OPTIONS} from '../../app.api';

import {LayoutDefaultComponent} from '../../layout/layout/layout.component';

import {VeiculoService} from '../veiculo.service';
import {Veiculo} from '../veiculo.model';

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html',
  styleUrls: ['./veiculo-list.component.css']
})
export class VeiculoListComponent implements OnInit {

  // dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<Veiculo> = new Subject()

  veiculos: Veiculo[]

  constructor(
    public layout: LayoutDefaultComponent, 
    public veiculoService: VeiculoService
  ) { }

  ngOnInit() {

    this.layout.title = 'Lista de Veiculo';
    // this.dtOptions = DATATABLE_OPTIONS;

    this.veiculoService.findAll()
    .subscribe(veiculos => {
      this.veiculos = veiculos;
      this.dtTrigger.next();
    });

  }

}