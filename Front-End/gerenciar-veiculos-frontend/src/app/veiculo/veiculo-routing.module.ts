import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VeiculoComponent} from './veiculo.component';
import {VeiculoFormularioComponent} from './veiculo-formulario/veiculo-formulario.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'veiculos'
    },
    children: [
      {
        path: '',
        data: {
          title: 'Listar'
        },
        component: VeiculoComponent
      },
      {
        path: 'novo',
        data: {
          title: 'Nova'
        },
        component: VeiculoFormularioComponent
      },
      {
        path: 'alterar/:id',
        data: {
          title: 'Alterar'
        },
        component: VeiculoFormularioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculoRoutingModule {
}
