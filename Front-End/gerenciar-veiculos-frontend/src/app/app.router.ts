import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {LayoutDefaultComponent} from './layout/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      {
        path: 'dashboard',
        data: {title: 'Dashboard'},
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'veiculo',
        data: {title: 'veiculo'},
        loadChildren: './veiculo/veiculo.module#VeiculoModule'
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
