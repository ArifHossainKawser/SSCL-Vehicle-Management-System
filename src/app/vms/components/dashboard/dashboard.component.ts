import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  sidebar: boolean = true;

  ngOnInit(): void {
  }

  sidebarShow(){
    this.sidebar = !this.sidebar;
    console.log(this.sidebar);

  }

}
