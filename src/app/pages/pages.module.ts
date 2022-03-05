import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../components/components.module';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficaOneComponent } from './grafica-one/grafica-one.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';


@NgModule({
  declarations: [
    PagesComponent,
    ProgressComponent,
    GraficaOneComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    ComponentsModule,
  ],
  exports: [
    PagesComponent,
    ProgressComponent,
    GraficaOneComponent,
    DashboardComponent
  ]
})
export class PagesModule { }
