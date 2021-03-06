import { Component, Inject, NgZone, OnInit, PLATFORM_ID } from '@angular/core';
import{PonteService} from'./../ponte.service';

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

  constructor(@Inject(PLATFORM_ID) private platformId:Object, private zone: NgZone, private ponteService:PonteService) {}

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

      var label = categoryAxis.renderer.labels.template;
      label.truncate = true;
      label.maxWidth = 200;
      label.tooltipText = "name";

      categoryAxis.events.on("sizechanged", function(ev) {
        let axis = ev.target;
          var cellWidth = axis.pixelWidth / (axis.endIndex - axis.startIndex);
          if (cellWidth < axis.renderer.labels.template.maxWidth) {
            axis.renderer.labels.template.rotation = -45;
            axis.renderer.labels.template.horizontalCenter = "right";
            axis.renderer.labels.template.verticalCenter = "middle";
          }
          else {
            axis.renderer.labels.template.rotation = 0;
            axis.renderer.labels.template.horizontalCenter = "middle";
            axis.renderer.labels.template.verticalCenter = "top";
          }
        });

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.min = 0;
      valueAxis.renderer.minGridDistance = 30;
      valueAxis.renderer.baseGrid.disabled = true;
  

      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.categoryX  = "name";
      series.dataFields.valueY = "value";

      series.columns.template.tooltipText = "{valueY.value}";
      series.columns.template.tooltipY = 0;
      series.columns.template.strokeOpacity = 0;


      chart.cursor = new am4charts.XYCursor();

      let scrollbarX = new am4charts.XYChartScrollbar();
      // scrollbarX.series.push(series);
      // chart.scrollbarX = scrollbarX;
      scrollbarX.marginBottom = 20;
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
  clickMe(){
    this.ponteService.sendClickEvent();
    }

}
