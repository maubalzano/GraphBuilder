import { formattedError } from '@angular/compiler';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as exporting from 'highcharts/modules/exporting';
import ExportModule from 'highcharts/modules/exporting';
import highcharts3d from 'highcharts/highcharts-3d';
import cylinder from 'highcharts/modules/cylinder';
import itemCharts from 'highcharts/modules/item-series'
import { SettingsService } from '../settings.service';
import { Options3d, Series } from '../models/Options';
ExportModule(Highcharts)
highcharts3d(Highcharts)
cylinder(Highcharts)
itemCharts(Highcharts)

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);


@Component({
  selector: 'graph-output-graph',
  templateUrl: './output-graph.component.html',
  styleUrls: ['./output-graph.component.css']
})
export class OutputGraphComponent implements OnInit, OnChanges {
  public obj = {title : ''}
  @Output() selectPoint = new EventEmitter<string>();
  @Input() title!: string;
  @Input() type!: string;
  @Input() series!: Series[];
  @Input() changeDetector!: boolean;
  @Input() options3d!: Options3d
  @Input() cylinder!: boolean;
  @Input() pointWidth!: number;
  chart!: any;
  options: any = {
    
    chart: {
      type: this.type,
      height:500,
      options3d: this.options3d,
      animation: true
    },
    plotOptions: {
      series: {
        animation: {
          duration: 0
        },
        accessibility: {
          enable: true
        },
        allowPointSelect: true
      }
    },
    title: {
      text: this.title
    },
    xAxis: {
      type: 'number',
      
    },
    series: [],
    credits: false,
    exporting: {
      allowHTML: true,
      buttons: {
        contextButton: {
          enabled: true
        }
      }
    }
  }
  
  constructor(private settings: SettingsService) {
    
   }
  
  ngOnInit(): void {
    // Highcharts.chart('container', this.options);
    // this.settings.watchInput.subscribe(data => {
    //   this.options = data
    //   ;
    // })
    //Highcharts.chart('container', this.options);
    this.options = JSON.parse(JSON.stringify(this.options));
      this.options.title.text = this.title;
      this.options.chart.type = this.cylinder && this.type == 'column' ? 'cylinder' : this.type;
      this.options.chart.options3d = this.options3d;
      this.options.series = this.series;
      if (this.options.chart.type == 'pie'){
        this.options.series.map((el: Series) => el.colorByPoint = false)
      } else {this.options.series.map((el: Series) => el.colorByPoint = false)}
      console.log(this.options.title.text);
      console.log(this.title);
      this.chart = Highcharts.chart('container', this.options);      
  }
  getPoints(){
    let point = this.chart.getSelectedPoints()[0];
    console.log(point);
    let series = point.series.name;
    console.log(series);
    this.selectPoint.emit(series)
  }
  ngOnChanges(){
      this.options = JSON.parse(JSON.stringify(this.options));
      this.options.title.text = this.title;
      this.options.chart.type = this.cylinder && this.type == 'column' ? 'cylinder' : this.type;
      this.options.chart.options3d = this.options3d;
      this.options.series = this.series;
      if (this.options.chart.type == 'pie'){
        this.options.series.map((el: Series) => el.colorByPoint = false)
      } else {this.options.series.map((el: Series) => el.colorByPoint = false)}
      console.log(this.options.title.text);
      console.log(this.title);
      this.chart = Highcharts.chart('container', this.options); 
      
      //this.options = JSON.parse(JSON.stringify(this.options));

      // this.chart.title.text = this.title;
      // this.chart.type = this.cylinder && this.type == 'column' ? 'cylinder' : this.type;
      // this.chart.options3d = this.options3d;
      // this.chart.series = this.series;
      // if (this.options.chart.type == 'pie'){
      //   this.options.series.map((el: Series) => el.colorByPoint = false)
      // } else {this.options.series.map((el: Series) => el.colorByPoint = false)}
      // console.log(this.options.title.text);
      // console.log(this.title);
      // //this.chart = Highcharts.chart('container', this.options);  
    }  
  }

