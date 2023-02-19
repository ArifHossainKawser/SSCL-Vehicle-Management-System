import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VmsRoutingModul } from './vms.route';
import { BookingRequestComponent } from './components/booking-request/booking-request.component';
import { ModelModule } from './model/model.module';



@NgModule({
  declarations: [
    DashboardComponent,
    BookingRequestComponent
  ],
  imports: [
    CommonModule,
    VmsRoutingModul,
    ModelModule
  ]
})
export class VmsModule { }
