import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sidebar: boolean = true;

  sidebarShow(){
    this.sidebar = !this.sidebar;
    console.log(this.sidebar);

  }
}
