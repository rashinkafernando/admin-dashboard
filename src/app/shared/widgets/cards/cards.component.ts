import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() label:string = "";
  @Input() total:string = "";
  @Input() percentage: string = "";
  @Input() data: any = [];
  Highcharts = Highcharts;

  chartOptions = {}
  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {
      chart: {
        type: "area",
        backgroundColor: null ,
        borderWidth:0,
        margin: [2,2,2,2],
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      xAxis: {
       
        title: {
          text: null
        },
        labels:{
          enabled: false
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      yAxis: {
        
        title: {
          text: null
        },
        labels:{
          enabled: false
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      tooltip: {
        split: true,
        outside: true
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false,
      },
      
      // plotOptions: {
      //   area: {
      //     stacking: 'normal',
      //     lineColor: '#666666',
      //     lineWidth: 1,
      //     marker: {
      //       lineWidth: 1,
      //       lineColor: '#666666'
      //     }
      //   }
      // },
      series: this.data
    };

    HC_exporting(this.Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  
}
