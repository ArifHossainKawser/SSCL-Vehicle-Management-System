import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Vehicle } from 'src/app/vms/model/vehicle';
import { BackendService } from 'src/app/vms/services/backend.service';


@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
  }

  vehicle: Vehicle = new Vehicle();

  addVehicle(form: NgForm){
    console.log("form call");
    this.backendService.AddVehicle(this.vehicle).subscribe(
      data => {
        console.log(data);

      }

    )
  }



}
