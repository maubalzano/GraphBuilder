import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'graph-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  @Output() colorPicker = new EventEmitter<string>();
  color: string = 'rgb(124, 181, 236)';
  show: boolean = false;
  colors: string[] = ['#ff4000','#ff8000','#ffbf00','#ffff00','#bfff00','#80ff00','#00ff00','#00ff40','#00ff80','#00ffbf','#00ffff','#00bfff','	#0080ff','#0040ff','#0000ff','#4000ff','#8000ff','#bf00ff','#ff00ff','#ff00bf','#ff0080','#ff0040','#ff0000','#fff', '#000']
  constructor() { }

  toggle(){
    this.show = !this.show
  }
  pickColor(color: string){
    this.color = color;
    this.colorPicker.emit(color);
    this.show = false
  }
  ngOnInit(): void {
  }

}
