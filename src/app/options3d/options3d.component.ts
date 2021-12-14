import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Options3d } from '../models/Options';

@Component({
  selector: 'graph-options3d',
  templateUrl: './options3d.component.html',
  styleUrls: ['./options3d.component.css']
})
export class Options3dComponent implements OnInit {
  @Input() options3d!: Options3d;
  @Input() type!: string;
  @Output() change3d = new EventEmitter<Options3d>()
  @Output() cylinderToggle = new EventEmitter()
  cylinder: boolean = false;
  constructor() { }

  options3dChange(){
    this.change3d.emit(this.options3d)
  }
  cylinderSet(){
    this.cylinderToggle.emit()
  }
  ngOnInit(): void {
  }

}
