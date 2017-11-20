import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { VeiculosComponent } from './veiculos/veiculos.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule
  ],
  declarations: [VeiculosComponent]
})
export class HomeModule { }
