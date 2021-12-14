import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Series, Data } from '../models/Options';

@Component({
  selector: 'graph-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  @Input() series!: Series[];
  @Output() addSeries = new EventEmitter();
  @Output() delete = new EventEmitter<Series>();
  @Output() select = new EventEmitter<Series>();
  selected!: Series;
  constructor() { }
  
  add(){
    this.addSeries.emit()
  }
  delSeries(single: Series){
    this.delete.emit(single)
  }
  selectSeries(single: Series){
    this.select.emit(single)
  }
  ngOnInit(): void {
  }

}
