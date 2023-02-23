import { NgModule } from "@angular/core";
import { BookingRepository } from "./booking.repository";
import { BookingDataSource } from "./booking.staticDataSource";


@NgModule({
  providers: [BookingRepository, BookingDataSource]
})
export class ModelModule{}
