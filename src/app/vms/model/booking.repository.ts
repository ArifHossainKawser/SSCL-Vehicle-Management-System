import { Injectable } from "@angular/core";
import { Booking } from "./booking";
import { BookingDataSource } from "./booking.staticDataSource";

@Injectable()
export class BookingRepository{
  private bookings: Booking[] = [];
  constructor(private dataSource: BookingDataSource){
    dataSource.getBookings().subscribe(
      data => {
        this.bookings = data;
      }
    )
  }


  getBookings(): Booking[] {
    return this.bookings;
  }

  getBooking(id: number): Booking | undefined{
   return this.bookings.find(b => b.id == id);
  }

  approve(index: number){
    this.bookings[index].approve = !this.bookings[index].approve;
  }

}
