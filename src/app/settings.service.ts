import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Setting, chartType } from './models/Setting';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings =  {
    chart: {
      type: 'bar',
      height: 400
    },
    title: {
      text: 'Dio merda'
    },
    xAxis: {
      type: 'number',
      
    },
    series: [
      {
        name: 'genders',
        colorByPoint:true,
        data: [
          {
          name: 'gay',
          y: 20,
          sliced: false
        },
        {
          name: 'straight',
          y: 20,
        },
        {
          name: 'pansexual',
          y: 30,
        },
        {
          name: 'asexual',
          y: 30,
        }]
      }
    ]
  }
  titleInput: string = '';
  watchInput = new BehaviorSubject<any>(this.settings)
  
  constructor() {
    
   }
  
  setWatchInput(value: any ){
    this.settings.chart.type = value.name;
    this.watchInput.next(this.settings);
    console.log(value.target.name)
  }
}
