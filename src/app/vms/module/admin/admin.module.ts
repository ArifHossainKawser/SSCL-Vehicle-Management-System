import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BookingRequestComponent } from './booking-request/booking-request.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouteOutletComponent } from './route-outlet/route-outlet.component';
import { BackendService } from '../../services/backend.service';


@NgModule({
  declarations: [
    BookingRequestComponent,
    DashboardComponent,
    RouteOutletComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  providers:[BackendService]
})
export class AdminModule { }
