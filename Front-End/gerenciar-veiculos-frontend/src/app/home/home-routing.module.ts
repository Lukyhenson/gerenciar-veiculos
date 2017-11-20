import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { VeiculosRotas } from './veiculos/veiculos-routing.module';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            ...VeiculosRotas
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule { }

