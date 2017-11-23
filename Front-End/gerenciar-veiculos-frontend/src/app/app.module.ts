import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.router';
import {LayoutDefaultComponent} from './layout/layout-default/layout-default.component';
import {BsDropdownModule} from 'ngx-bootstrap';
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
  bootstrap: [AppComponent]
})
export class AppModule {
}
