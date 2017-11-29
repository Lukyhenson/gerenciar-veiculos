import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {LayoutDefaultComponent} from './layout/layout/layout.component';

import {veiculoRoutes} from './veiculo/veiculo-routing.module';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'veiculo',
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
      ...veiculoRoutes
    ]
  },
  {
    path: '**',
    redirectTo: 'veiculo',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
