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
  router: any;

  // dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<Veiculo> = new Subject()

  veiculos: Veiculo[]

  constructor(public layout: LayoutDefaultComponent, public veiculoService: VeiculoService) { 
    this.layout.title = 'Lista de Veículos';

    this.veiculoService.findAll().subscribe(
      veiculos => {
        console.log(veiculos);
        this.veiculos = veiculos;
      }
    );

  }

  deleteVeiculo(id: number, index: number): void{
    if( id != null ){
      this.veiculoService.delete(id).subscribe(response => {
        this.veiculos.splice(index, 1);
        
      }, error => {
        alert('deletou com sucesso');
      });
    } else {
      alert('erro o remover');
    }
    this.router.navigate(['/veiculo/listar']);
  }

  ngOnInit() {
    
  }

}