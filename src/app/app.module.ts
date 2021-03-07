import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GraficosComponent } from './graficos/graficos.component';
import { RouterModule } from '@angular/router';
import { Graficos2Component } from './graficos2/graficos2.component';
import { BarTopComponent } from './bar-top/bar-top.component';
import { ChartsModule } from 'ng2-charts';
// import { NgbdButtonsRadio } from './buttons-radio';

@NgModule({
  declarations: [
    AppComponent,
    GraficosComponent,
    Graficos2Component,
    BarTopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    ChartsModule,
    RouterModule.forRoot([
      { path: '', component: GraficosComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
