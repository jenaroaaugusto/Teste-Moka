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
import { NgxEchartsModule } from 'ngx-echarts';

import * as echarts from 'echarts';
import { TabelaComponent } from './tabela/tabela.component';
// import { NgxEchartsModule } from 'ngx-echarts';

// import { NgbdButtonsRadio } from './buttons-radio';

@NgModule({
  declarations: [
    AppComponent,
    GraficosComponent,
    Graficos2Component,
    BarTopComponent,
    TabelaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    ChartsModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
    RouterModule.forRoot([
      { path: '', component: GraficosComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
