import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideRoutes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { VeiculoComponent } from './admin/veiculo/veiculo.component';
import { FabricanteComponent } from './admin/fabricante/fabricante.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    VeiculoComponent,
    FabricanteComponent,
  ],
  imports: [
    HomeModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
