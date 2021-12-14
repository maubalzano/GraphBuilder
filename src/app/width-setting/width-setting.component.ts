import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'graph-width-setting',
  templateUrl: './width-setting.component.html',
  styleUrls: ['./width-setting.component.css']
})
export class WidthSettingComponent implements OnInit {
  @Input() type!: string;
  @Output() setWidth = new EventEmitter<number>()
  pointWidth: number = 20;

  constructor() { }

  changeWidth(){
    this.setWidth.emit(this.pointWidth)
  }

  ngOnInit(): void {
  }

}
