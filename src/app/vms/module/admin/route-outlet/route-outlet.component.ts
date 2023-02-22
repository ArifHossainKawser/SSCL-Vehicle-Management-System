import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-outlet',
  templateUrl: './route-outlet.component.html',
  styleUrls: ['./route-outlet.component.css']
})
export class RouteOutletComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sidebar: boolean = true;

  sidebarShow(){
    this.sidebar = !this.sidebar;
    console.log(this.sidebar);

  }

}
