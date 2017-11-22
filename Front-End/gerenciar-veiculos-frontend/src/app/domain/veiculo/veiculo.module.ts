import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculoListComponent } from './veiculo-list/veiculo-list.component';
import { VeiculoFormComponent } from './veiculo-form/veiculo-form.component';
import { VeiculoDetailsComponent } from './veiculo-details/veiculo-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VeiculoListComponent, VeiculoFormComponent, VeiculoDetailsComponent]
})
export class VeiculoModule { }
