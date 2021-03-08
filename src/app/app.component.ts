import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as data from './data.json' ;

interface Cities {
  id?: number;
  name: string;
  value: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard Moka';
  model = 1;

  isDisabled = true;

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }

  // dados
  products: any = (data as any).default;
  
  page = 1;
  pageSize = 10;
  collectionSize = this.products.length;
  countries!: Cities[];

  constructor(){}
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
