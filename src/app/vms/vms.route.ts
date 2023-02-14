import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingRequestComponent } from './components/booking-request/booking-request.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {path: "vmsDashboard", component:DashboardComponent},
  {path: "car-booking-request", component:BookingRequestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class VmsRoutingModul { }
