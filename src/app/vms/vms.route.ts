import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { AdminModule } from './module/admin/admin.module';



const routes: Routes = [
  {path: 'login', component:LogInComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class VmsRoutingModul { }
