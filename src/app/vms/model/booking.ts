

export class Booking{
  constructor(
    public id?: number,
    public carNo?: string,
    public name?: string,
    public driverName?: string,
    public place?: string,
    public dateFrom?: string,
    public dateTo?: string,
    public timeFrom?: string,
    public timeTo?: string,
    public totalDuration?: string,
    public approve: boolean = true,
    public status?: string,
  ){}

}
