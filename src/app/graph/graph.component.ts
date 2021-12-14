import { Component, OnInit } from '@angular/core';
import { Series, Data, Options3d } from '../models/Options';

@Component({
  selector: 'graph-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  title: string = 'title';
  type: string = 'bar';
  cylinder: boolean = false;
  pointWidth: number = 20;
  options3d: Options3d = {
    enabled: false,
    alpha: 30,
    beta: 20,
    depth: 30,
    viewDistance: 25
  }
  series: Series[] = [
    {
      name: 'Dogs',
      colorByPoint:false,
      startAngle: -100,
      endAngle: 100,
      data: [
        {
        name: 'Jack Russels',
        y: 20,
        sliced: false,
        pointWidth: this.pointWidth,
        dragDrop: {
            draggableX: true,
            draggableY: true,
            liveRedraw: true
          }
      },
      {
        name: 'Pugs',
        y: 20,
        pointWidth: this.pointWidth,
        dragDrop: {
          draggableX: true,
          draggableY: true,
          liveRedraw: true
        }
      },
      {
        name: 'Border Collies',
        y: 30,
        pointWidth: this.pointWidth,
        dragDrop: {
            draggableX: true,
            draggableY: true,
            liveRedraw: true
          }
      },
      {
        name: 'Chiwawa',
        y: 30,
        pointWidth: this.pointWidth,
        dragDrop: {
          draggableX: true,
          draggableY: true,
          liveRedraw: true
        }
      }]
    }
  ]
  selected!: Series;
  changeDetector: boolean = false;
  
  changeProp(){
    this.series = Array.from(this.series);
    this.changeDetector = !this.changeDetector
  }
  addData(single: Series){
    let newDataList: Data[] = single.data.filter(el => el.name.startsWith('New Data'));
    let newDataNumber: number = newDataList.length != 0 ? Number(newDataList.reverse()[0].name.split(' ').reverse()[0]) + 1 : 1;
    const newData: Data = {
      name: `New Data ${newDataNumber}`,
      y: 0,
      dragDrop: {
        draggableX: true,
        draggableY: true,
        liveRedraw: true
      }
    }
    single.data.push(newData);
    this.changeDetector = !this.changeDetector
  }
  addSeries(){
    let newSeriesList: Series[] = this.series.filter(el => el.name.startsWith('New Series'));
    let newSeriesNumber: number = newSeriesList.length != 0 ? Number(newSeriesList.reverse()[0].name.split(' ').reverse()[0]) + 1 : 1;
    const newSeries: Series = {
      
        name: `New Series ${newSeriesNumber}`,
        colorByPoint: this.type == 'pie'? true : false,
        startAngle: -100,
        endAngle: 100,
        data: [
          {
          name: 'New Data 1',
          y: 0,
          sliced: false,
          dragDrop: {
            draggableX: true,
            draggableY: true,
            liveRedraw: true
          }
        }]
      
    }
    
    this.series.push(newSeries);
  }
  deleteSeries(single: Series){
    this.series = this.series.filter(el => el.name != single.name)
  }
  selectSeries(single: Series){
    this.selected = single;
  }
  delData(dataSingle: Data){
    this.selected.data = this.selected.data.filter(el => el.name != dataSingle.name);
    this.changeDetector = !this.changeDetector
  }
  slice(dataSingle: Data){
    dataSingle.sliced = !dataSingle.sliced;
    this.changeDetector = !this.changeDetector
  }
  setColor(color: string, dataSingle: Data){
    dataSingle.color = color;
    this.changeDetector = !this.changeDetector
  }
  toggle3d(){
    this.options3d.enabled = !this.options3d.enabled;
    this.cylinder = false;
    this.changeDetector = !this.changeDetector
  }
  options3dChange(options: Options3d){
    this.options3d = options;
    this.changeDetector = !this.changeDetector
  }
  cylinderToggle(){
    this.cylinder = !this.cylinder
  }
  changeWidth(width: number){
    this.pointWidth = width;
    this.series.map(singleSeries => singleSeries.data.map(data => data.pointWidth = width));
    this.changeDetector = !this.changeDetector
  }
  selectPoint(point: string){
    let select: Series[] = this.series.filter(el => el.name == point);
    this.selected = select[0];
  }
  constructor() {}
  
  ngOnInit(): void {
  }

}
