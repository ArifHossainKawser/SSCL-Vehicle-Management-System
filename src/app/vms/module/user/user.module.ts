import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RouteOutletComponent } from './components/route-outlet/route-outlet.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CarRequestComponent } from './components/car-request/car-request.component';
import { RequestHistoryComponent } from './components/request-history/request-history.component';


@NgModule({
  declarations: [
    RouteOutletComponent,
    DashboardComponent,
    CarRequestComponent,
    RequestHistoryComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
