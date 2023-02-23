import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BookingRequestComponent } from './booking-request/booking-request.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouteOutletComponent } from './route-outlet/route-outlet.component';
import { BackendService } from '../../services/backend.service';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../../model/model.module';


@NgModule({
  declarations: [
    BookingRequestComponent,
    DashboardComponent,
    RouteOutletComponent,
    AddVehicleComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ModelModule
  ],
  providers:[BackendService]
})
export class AdminModule { }
