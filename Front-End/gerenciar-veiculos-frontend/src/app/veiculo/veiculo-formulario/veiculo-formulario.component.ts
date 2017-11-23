import {Component, OnInit} from '@angular/core';
import {LayoutDefaultComponent} from '../../layout/layout-default/layout-default.component';
import {ActivatedRoute, Router} from '@angular/router';
import {VeiculoService} from '../veiculo.service';
import {Veiculo} from '../veiculo.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-veiculo-formulario',
  templateUrl: './veiculo-formulario.component.html'
})
export class VeiculoFormularioComponent implements OnInit {

  id: number;
  veiculo: Veiculo;
  veiculoForm: FormGroup;

  constructor(public layout: LayoutDefaultComponent,
              private route: ActivatedRoute,
              private router: Router,
              private builder: FormBuilder,
              private veiculoService: VeiculoService) {
  }

  ngOnInit() {

    /* Define o titulo da página */
    this.layout.title = (this.id == null) ? 'Nova veiculo' : 'Alterar veiculo'

    /* Obter o `ID` passado por parâmetro na URL */
    this.id = this.route.snapshot.params['id'];

    /* Reactive Forms */
    this.veiculoForm = this.builder.group({
      id: [],
      nome: this.builder.control('', [Validators.required, Validators.minLength(5)]),
      modelo: [null, Validators.required],
      detalhes: [],
      fabricante: [null, Validators.required]
    }, {});

    // Se existir `ID` realiza busca para trazer os dados
    if (this.id != null) {
      this.veiculoService.visualizar(this.id)
        .subscribe(veiculo => {
          this.veiculoForm = this.builder.group(veiculo, {});
        })
    }
  }

  /* Método para salva veiculo */
  salvar(veiculo: Veiculo) {
    this.veiculoService.salvar(veiculo)
      .subscribe(response => {
        /* Adiciona a lista de mensagens p/ exibição no front-end */
        this.layout.addMessages(response.messages);
console.log(response.messages);
        /* Redireciona para lista */
        this.router.navigate(['/veiculo']);
      });
  }
}
