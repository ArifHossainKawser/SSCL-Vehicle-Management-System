import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './vms/components/log-in/log-in.component';
import { AdminGuard } from './vms/module/admin/admin.guard';



const routes: Routes = [
  {path: 'admin', canActivate: [AdminGuard], loadChildren: () => import('./vms/module/admin/admin.module').then(m => m.AdminModule)},
  {path: 'login', component:LogInComponent},
  {path: '**', redirectTo: "/login", pathMatch: "full" },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
