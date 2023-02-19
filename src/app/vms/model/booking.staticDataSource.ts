import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { Booking } from "./booking";

@Injectable()
export class BookingDataSource {
  private booking: Booking[] = [
    new Booking(1,"A1234", "Arif Hossain", "Mahmudul Hasan", "Dhanmondi", "", "", "", "", "",),
    new Booking(2,"A1234", "Arif Hossain", "Mahmudul Hasan", "Dhanmondi", "", "", "", "", "", ),
    new Booking(3,"A1234", "Arif Hossain", "Mahmudul Hasan", "Dhanmondi", "", "", "", "", "",),
    new Booking(4,"A1234", "Arif Hossain", "Mahmudul Hasan", "Dhanmondi", "", "", "", "", "" , ),
    new Booking(5,"A1234", "Arif Hossain", "Mahmudul Hasan", "Dhanmondi", "", "", "", "", "" ),
    new Booking(6,"A1234", "Arif Hossain", "Mahmudul Hasan", "Dhanmondi", "", "", "", "", "" , ),
    new Booking(1,"A1234", "Arif Hossain", "Mahmudul Hasan", "Dhanmondi", "", "", "", "", "",),
    new Booking(2,"A1234", "Arif Hossain", "Mahmudul Hasan", "Dhanmondi", "", "", "", "", "", ),
    new Booking(3,"A1234", "Arif Hossain", "Mahmudul Hasan", "Dhanmondi", "", "", "", "", "",),
    new Booking(4,"A1234", "Arif Hossain", "Mahmudul Hasan", "Dhanmondi", "", "", "", "", "" , ),
    new Booking(5,"A1234", "Arif Hossain", "Mahmudul Hasan", "Dhanmondi", "", "", "", "", "" ),
    new Booking(6,"A1234", "Arif Hossain", "Mahmudul Hasan", "Dhanmondi", "", "", "", "", "" , ),
  ];

  getBookings(): Observable<Booking[]> {
    return from([this.booking]);
  }

}
