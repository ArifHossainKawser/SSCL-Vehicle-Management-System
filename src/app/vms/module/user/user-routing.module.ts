import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { CarRequestComponent } from './components/car-request/car-request.component';
import { RequestHistoryComponent } from './components/request-history/request-history.component';
import { RouteOutletComponent } from './components/route-outlet/route-outlet.component';

const routes: Routes = [
  {path: '', component: RouteOutletComponent,
  children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'car-request', component: CarRequestComponent},
    {path: 'request-history', component: RequestHistoryComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
