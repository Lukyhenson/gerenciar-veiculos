import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {VeiculoComponent} from './veiculo.component';
import {VeiculoListComponent} from './veiculo-list/veiculo-list.component';
import {VeiculoFormComponent} from './veiculo-form/veiculo-form.component';
import {VeiculoDetailsComponent} from './veiculo-details/veiculo-details.component';

const routes: Routes = [
  { path: '', component: VeiculoComponent},
  { path: 'veiculo', component: VeiculoListComponent},
  { path: 'veiculo/visualizar/:id', component: VeiculoDetailsComponent},
  { path: 'veiculo/novo', component: VeiculoFormComponent},
  { path: 'veiculo/alterar/:id', component: VeiculoFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculoRoutingModule {
}
