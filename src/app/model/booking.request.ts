import { Time } from "@angular/common";

export class BookingRequest{
  constructor(
    public carNo?: string,
    public name?: string,
    public place?: string,
    public dateFrom?: Date,
    public dateTo?: Date,
    public timeFrom?: Time,
    public timeTo?: Time,
    public totalDuration?: Time,
    public action = false
  ){}
}
