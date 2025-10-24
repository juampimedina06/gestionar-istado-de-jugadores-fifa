import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto'; 

interface Dataset {
   label: string;
   data: number[];
   backgroundColor?: string; 
   borderColor?: string;
   pointBackgroundColor?: string; 
}

@Component({
  selector: 'app-grafico',  standalone: true,
  imports: [],
  templateUrl: './grafico.html',
  styleUrl: './grafico.scss'
})
export class Grafico implements AfterViewInit, OnChanges {
 
  @ViewChild('radarChart') radarChart!: ElementRef<HTMLCanvasElement>;
  radarChartInstance!: Chart; 

 @Input() labels: string[] = ['Punto 1', 'Punto 2', 'Punto 3', 'Punto 4', 'Punto 5'];
 @Input() datasets: Dataset[] = [];


 ngAfterViewInit(): void {
  this.createChart();
}

 ngOnChanges(changes: SimpleChanges): void {
  if ((changes['datasets'] || changes['labels']) && this.radarChartInstance) {
   this.updateChart();
  }
 }

 createChart(): void {
  if (!this.datasets.length || !this.radarChart) return;

  if (this.radarChartInstance) {
    this.radarChartInstance.destroy();
  }

  this.radarChartInstance = new Chart(this.radarChart.nativeElement, {
    type: 'radar', 
      data: {
        labels: this.labels,
         datasets: this.datasets.map(dataset => ({
          ...dataset,
          fill: true, 
          backgroundColor: dataset.backgroundColor || 'rgba(54, 162, 235, 0.2)',
          borderColor: dataset.borderColor || 'rgb(54, 162, 235)',
          pointBackgroundColor: dataset.pointBackgroundColor || 'rgb(54, 162, 235)',
    }))
   },
   options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
     legend: { display: true }
      },
      scales: {
       r: { 
         beginAtZero: true,
         pointLabels: {
          font: {
            size: 12
          }
         }
       }
      }
     }
    });
  }

 updateChart(): void {
  if (!this.radarChartInstance) {
   this.createChart();
   return;
  }

   this.radarChartInstance.data.labels = this.labels;
   this.radarChartInstance.data.datasets = this.datasets.map(dataset => ({
     ...dataset,
     fill: true,
     backgroundColor: dataset.backgroundColor || 'rgba(54, 162, 235, 0.2)',
     borderColor: dataset.borderColor || 'rgb(54, 162, 235)',
     pointBackgroundColor: dataset.pointBackgroundColor || 'rgb(54, 162, 235)',
   }));
   
   this.radarChartInstance.update();
 }
}