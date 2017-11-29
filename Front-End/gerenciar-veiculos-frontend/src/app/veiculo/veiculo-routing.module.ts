import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {VeiculoComponent} from './veiculo.component';
import {VeiculoListComponent} from './veiculo-list/veiculo-list.component';
import {VeiculoFormComponent} from './veiculo-form/veiculo-form.component';
import {VeiculoDetailsComponent} from './veiculo-details/veiculo-details.component';

export const veiculoRoutes: Routes = [
  { path: '', redirectTo: 'veiculo', pathMatch: 'full'},
  { path: 'veiculo', component: VeiculoComponent},
  { path: 'veiculo/listar', component: VeiculoListComponent},
  { path: 'veiculo/visualizar/:id', component: VeiculoDetailsComponent},
  { path: 'veiculo/novo', component: VeiculoFormComponent},
  { path: 'veiculo/alterar/:id', component: VeiculoFormComponent},
];

/*
@NgModule({
  imports: [RouterModule.forChild(veiculoRoutes)],
  exports: [RouterModule]
})
export class VeiculoRoutingModule {
}
*/
