import { Routes } from '@angular/router';

import { VeiculosComponent } from './veiculos.component';

export const VeiculosRotas: Routes = [
    {
        path: 'veiculo/:id',
        component: VeiculosComponent
    }
];
