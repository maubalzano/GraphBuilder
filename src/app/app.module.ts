import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OutputGraphComponent } from './output-graph/output-graph.component';
import { SettingsComponent } from './settings/settings.component';
import { GraphComponent } from './graph/graph.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { Options3dComponent } from './options3d/options3d.component';
import { WidthSettingComponent } from './width-setting/width-setting.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MapsComponent } from './map/maps/maps.component';
import { AppRoutingModule } from './app-routing.module';
import { OutputMapComponent } from './map/output-map/output-map.component';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    OutputGraphComponent,
    SettingsComponent,
    GraphComponent,
    SeriesListComponent,
    ColorPickerComponent,
    Options3dComponent,
    WidthSettingComponent,
    NavbarComponent,
    MapsComponent, 
    OutputMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
