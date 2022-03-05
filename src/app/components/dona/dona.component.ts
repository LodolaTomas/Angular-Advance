import { Component, Input } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';
@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent  {

  @Input() titulo :string = 'Sin titulo';

  @Input() doughnutChartLabels: string[] = ['Pan', 'Refresco', 'Tacos'];
  @Input() doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [10, 20, 30] },
    ]
  };


}
