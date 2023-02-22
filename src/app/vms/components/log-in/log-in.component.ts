import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../../services/backend.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private backendService: BackendService, private route: Router) { }

  ngOnInit(): void {
  }

  email: string = '';
  password: string = '';
  errorMessage?: string = '';

  login(){
    console.log(this.email);
    console.log(this.password);
    this.backendService.authenticate(this.email, this.password).subscribe(
      response => {
        if(response){
            this.route.navigateByUrl('/admin');
        }
      }
    ),
    this.errorMessage = 'Invalid Credential';
  }


}
