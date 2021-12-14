import { Component, OnInit } from '@angular/core';
import MapModule from 'highcharts/modules/map';
import * as Highcharts from 'highcharts/highmaps';
MapModule(Highcharts);


@Component({
  selector: 'graph-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  map!: any; 
  constructor() {

   }

  ngOnInit(): void {
  }

}
