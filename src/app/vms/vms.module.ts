import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VmsRoutingModul } from './vms.route';
import { BookingRequestComponent } from './components/booking-request/booking-request.component';



@NgModule({
  declarations: [
    DashboardComponent,
    BookingRequestComponent
  ],
  imports: [
    CommonModule,
    VmsRoutingModul
  ]
})
export class VmsModule { }
