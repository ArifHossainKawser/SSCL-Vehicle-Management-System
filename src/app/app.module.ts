import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './vms/module/admin/admin.module';
import { BackendService } from './vms/services/backend.service';
import { VmsModule } from './vms/vms.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    VmsModule,
    AdminModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
