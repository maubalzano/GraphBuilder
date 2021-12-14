import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphComponent } from './graph/graph.component';
import { MapsComponent } from './map/maps/maps.component';

const routes: Routes = [ 
  { path: 'graph', component: GraphComponent},
  { path:'maps', component: MapsComponent},
  { path:'', component: GraphComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
