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
  
  constructor(){
  }
  products: any = (data as any).default;

  chartOptions = {
    responsive: true,
    
  };
  nome_cidades = this.products.map((item2: { name: any; })=> {
    return[item2.name]  
  });

  
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

  formatatdados(){

    const dados =[]
    for (let index = 0; index < this.products.length; index++) {
      const element = this.products[index];
      dados.push(element.value )
      };
    return [{label:'',data:dados}]

  }

  chartData =this.formatatdados();


  refreshCountries() {
    this.countries = this.products
      .map((cities: any, i: number) => ({id: i + 1, ...cities}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  ngOnInit(){
 
  }
}