import { Component, OnInit } from '@angular/core';
import * as data from './data.json' ;


interface Cities {
  id?: number;
  name: string;
  value: number;
}

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {
  
  constructor(){}
  products: any = (data as any).default;
  
  // public barChartOptions = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };
  // refreshGraf(){
    chartOptions = {
      responsive: true,
      
    };
    chartData = [
      { data: [330, 600, 260, 700], label: 'Account A' },
      { data: [120, 455, 100, 340], label: 'Account B' },
      { data: [45, 67, 800, 500], label: 'Account C' }
    ];
    chartLabels = ['January', 'February', 'Mars', 'April'];
  // }
 
  newDataPoint(dataArr = [100, 100, 100], label: string) {

    this.chartData.forEach((dataset, index) => {
      this.chartData[index] = Object.assign({}, this.chartData[index], {
        data: [...this.chartData[index].data, dataArr[index]]
      });
    });
  
    this.chartLabels = [...this.chartLabels, label];
  
  }


  model = 1;


  isDisabled = true;
  isHidden= true;

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
  viewGraf(){
    this.isHidden = !this.isHidden;
}
 
  
  page = 1;
  pageSize = 10;
  collectionSize = this.products.length;
  countries!: Cities[];

  
    // this.refreshCountries();
  // }

  refreshCountries() {
    this.countries = this.products
      .map((cities: any, i: number) => ({id: i + 1, ...cities}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  ngOnInit(){
    // console.log(data);
  }
}
