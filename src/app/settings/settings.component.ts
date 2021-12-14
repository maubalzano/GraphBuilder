import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'graph-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  titleInput: string = '';
  watchInput = new BehaviorSubject<string>(this.titleInput)
  constructor(public settings: SettingsService) {
    this.watchInput = new BehaviorSubject<string>(this.titleInput)
   }
  
  ngOnInit(): void {
  }
  
}
