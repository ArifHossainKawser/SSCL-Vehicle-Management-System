import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-request',
  templateUrl: './booking-request.component.html',
  styleUrls: ['./booking-request.component.css']
})
export class BookingRequestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  actionButton: boolean = true;

  approve(){
    this.actionButton = !this.actionButton;
  }

}
