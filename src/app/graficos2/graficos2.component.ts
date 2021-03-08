import { Component, Inject, NgZone, OnInit, PLATFORM_ID } from '@angular/core';

import * as data from './data.json' ;
interface Cities {
  id?: number;
  name: string;
  value: number;
}



import { isPlatformBrowser } from '@angular/common';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';



@Component({
  selector: 'app-graficos2',
  templateUrl: './graficos2.component.html',
  styleUrls: ['./graficos2.component.css']
})
export class Graficos2Component implements OnInit {
  cidades: any = (data as any).default;
  private chart!: am4charts.XYChart;

  constructor(@Inject(PLATFORM_ID) private platformId:Object, private zone: NgZone) {}

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  grafico2() {
    // Chart code goes in here
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("chartdiv", am4charts.XYChart);
      chart.hiddenState.properties.opacity = 0
      chart.paddingRight = 20;

      let data2 = [];
   
      for (let index = 0; index < this.cidades.length; index++) {
        const element = this.cidades[index];
        data2.push({name:element.name, value: element.value})
      }

      chart.data = data2;

      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.dataFields.category = "name";
      categoryAxis.renderer.minGridDistance = 40;
      categoryAxis.fontSize = 11;
      categoryAxis.renderer.labels.template.dy = 5;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.min = 0;
      valueAxis.renderer.minGridDistance = 30;
      valueAxis.renderer.baseGrid.disabled = true;
      // valueAxis.renderer.minWidth = 35;

      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.categoryX  = "name";
      series.dataFields.valueY = "value";

      series.columns.template.tooltipText = "{valueY.value}";
      series.columns.template.tooltipY = 0;
      series.columns.template.strokeOpacity = 0;


      chart.cursor = new am4charts.XYCursor();

      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
      chart.scrollbarX = scrollbarX;

      this.chart = chart;
    });
  }

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
  collectionSize = this.cidades.length;
  countries!: Cities[];

  refreshCountries() {
    this.countries = this.cidades
      .map((cities: any, i: number) => ({id: i + 1, ...cities}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

  ngOnInit(): void {
  
  }

}
