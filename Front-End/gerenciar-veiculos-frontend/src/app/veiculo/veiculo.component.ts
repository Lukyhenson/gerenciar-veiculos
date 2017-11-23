import {Component, OnInit} from '@angular/core';
import {LayoutDefaultComponent} from '../layout/layout/layout.component';
import {VeiculoService} from './veiculo.service';
import {Veiculo} from './veiculo.model';
import {Subject} from 'rxjs/Subject';
import {DATATABLE_OPTIONS} from '../app.api';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html'
})
export class VeiculoComponent implements OnInit {

  // dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<Veiculo> = new Subject();

    veiculos: Veiculo[];

    constructor(public layout: LayoutDefaultComponent, public veiculoService: VeiculoService) {
    }

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
