import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/vms/model/booking';
import { BookingRepository } from 'src/app/vms/model/booking.repository';

@Component({
  selector: 'app-booking-request',
  templateUrl: './booking-request.component.html',
  styleUrls: ['./booking-request.component.css']
})
export class BookingRequestComponent implements OnInit {

  constructor(private repository: BookingRepository) { }

  ngOnInit(): void {
  }

  approve(index: number){
    this.repository.approve(index);
  }

  get newBookingsRequest(): Booking[] | undefined{
    return this.repository.getBookings().filter(b => b.approve == true);
  }

  get approvedRequest(): Booking[] {
    return this.repository.getBookings().filter(b => b.approve == false);

}

}
