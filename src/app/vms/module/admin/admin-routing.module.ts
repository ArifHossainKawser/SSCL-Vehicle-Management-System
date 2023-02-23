import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingRequestComponent } from './booking-request/booking-request.component';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouteOutletComponent } from './route-outlet/route-outlet.component';

const routes: Routes = [
  {path: '', component: RouteOutletComponent,
  children:[
    {path: 'dashboard', component: DashboardComponent},
    {path: 'booking-request', component: BookingRequestComponent},
    {path: 'add-vehicle', component: AddVehicleComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
