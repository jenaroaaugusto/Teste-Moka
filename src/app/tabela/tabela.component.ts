import { Component, OnInit } from '@angular/core';
import * as data from './data.json' ;
interface Cities {
  id?: number;
  name: string;
  value: number;
}


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  cidades: any = (data as any).default;

  constructor() { }

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
  ngOnInit(): void {
  }

}