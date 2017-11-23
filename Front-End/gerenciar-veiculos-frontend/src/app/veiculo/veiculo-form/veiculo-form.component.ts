import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {LayoutDefaultComponent} from '../../layout/layout/layout.component';

import {VeiculoService} from '../veiculo.service';
import {Veiculo} from '../veiculo.model';

@Component({
  selector: 'app-veiculo-form',
  templateUrl: './veiculo-form.component.html',
  styleUrls: ['./veiculo-form.component.css']
})
export class VeiculoFormComponent implements OnInit {

  veiculo: Veiculo;
  veiculoForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    public layout: LayoutDefaultComponent,
    public veiculoService: VeiculoService
  ) { }

  ngOnInit() {

    /* Obter o `ID` passado por parâmetro na URL */
    this.veiculo.id = this.route.snapshot.params['id'];

    /* Define o titulo da página */
    this.layout.title = (this.veiculo.id == null) ? 'Novo Veiculo' : 'Alterar Veiculo';

    /* Reactive Forms */
    this.veiculoForm = this.builder.group({
      id: [],
      nome: this.builder.control('', [Validators.required, Validators.maxLength(50)]),
      modelo: this.builder.control('', [Validators.required,Validators.maxLength(50)]),
      detalhes: this.builder.control('', [Validators.required,Validators.maxLength(50)]),
      fabricante: this.builder.control('', [Validators.required,Validators.maxLength(50)])
    }, {});

    // Se existir `ID` realiza busca para trazer os dados
    if (this.veiculo.id != null) {
      this.veiculoService.findOne(this.veiculo.id)
        .subscribe(veiculo => {
          this.veiculoForm = this.builder.group(veiculo, {})
        });
    }

  }

  /* Método para salva mantenedora */
  salvar(veiculo: Veiculo) {
    this.veiculoService.save(veiculo)
      .subscribe(response => {
        this.router.navigate(['/veiculo']);
      });
  }

}
