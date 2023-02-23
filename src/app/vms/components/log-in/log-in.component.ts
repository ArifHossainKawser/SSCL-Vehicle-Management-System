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
    this.backendService.authenticate(this.email, this.password).subscribe(
      response => {
        if(response == 'ADMIN'){
            this.route.navigateByUrl('/admin');
        }else{
          this.errorMessage = 'Invalid Credential';
        }
        if(response == 'USER'){
          this.route.navigateByUrl('/user');
      }else{
        this.errorMessage = 'Invalid Credential';
      }
      }
    )

  }


}
