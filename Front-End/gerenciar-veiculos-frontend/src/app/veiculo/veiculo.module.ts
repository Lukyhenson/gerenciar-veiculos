import { RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VeiculoComponent} from './veiculo.component';
import {VeiculoService} from './veiculo.service';
import {HttpModule} from '@angular/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { VeiculoListComponent } from './veiculo-list/veiculo-list.component';
import { VeiculoDetailsComponent } from './veiculo-details/veiculo-details.component';
import { VeiculoFormComponent } from './veiculo-form/veiculo-form.component';

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    VeiculoComponent,
    VeiculoListComponent,
    VeiculoDetailsComponent,
    VeiculoFormComponent
  ],
  providers: [
    VeiculoService
  ]
})
export class VeiculoModule {
}
