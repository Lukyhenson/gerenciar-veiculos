import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.router';
import {LayoutDefaultComponent} from './layout/layout/layout.component';
import {VeiculoService} from './veiculo/veiculo.service';
import {VeiculoModule} from './veiculo/veiculo.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutDefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    VeiculoModule
  ],
  providers: [],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
