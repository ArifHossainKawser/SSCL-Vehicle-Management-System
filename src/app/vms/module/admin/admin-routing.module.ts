import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingRequestComponent } from './booking-request/booking-request.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouteOutletComponent } from './route-outlet/route-outlet.component';

const routes: Routes = [
  {path: '', component: RouteOutletComponent,
  children:[
    {path: 'dashboard', component: DashboardComponent},
    {path: 'booking-request', component: BookingRequestComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
