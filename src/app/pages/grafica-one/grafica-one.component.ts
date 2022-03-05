import { Component } from '@angular/core';
import { ChartData, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-grafica-one',
  templateUrl: './grafica-one.component.html',
  styles: [
  ]
})
export class GraficaOneComponent {

  public labels: string[] = ['Pan', 'Refresco', 'Tacos'];

  public data1 : ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: [
      { data: [10, 50, 30] },
    ]
  };

}
