import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VmsRoutingModul } from './vms.route';

import { ModelModule } from './model/model.module';
import { LogInComponent } from './components/log-in/log-in.component';
import { BackendService } from './services/backend.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminGuard } from './module/admin/admin.guard';





@NgModule({
  declarations: [
    LogInComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    VmsRoutingModul,
    ModelModule,
    HttpClientModule,
  ],
  providers: [BackendService],
  bootstrap: [LogInComponent]
})
export class VmsModule { }
