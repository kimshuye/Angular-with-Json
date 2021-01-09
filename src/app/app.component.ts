import { Component } from '@angular/core';

import * as data from '../assets/data/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-with-Json';
  datalist: any = (data as any).default;

  getData(){
    return this.datalist;
  }
}
