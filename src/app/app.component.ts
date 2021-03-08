import { Component } from '@angular/core';
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
  json=data;

  ngOnInit(){
    // console.log(data);
  }
}
