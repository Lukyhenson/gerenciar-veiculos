import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VeiculoRoutingModule} from './veiculo-routing.module';
import {VeiculoComponent} from './veiculo.component';
import {VeiculoService} from './veiculo.service';
import {HttpModule} from '@angular/http';

import {VeiculoFormularioComponent} from './veiculo-formulario/veiculo-formulario.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    VeiculoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    VeiculoComponent,
    VeiculoFormularioComponent
  ],
  providers: [
    VeiculoService
  ]
})
export class VeiculoModule {
}
