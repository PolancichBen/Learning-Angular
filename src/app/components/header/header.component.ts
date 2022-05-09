import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Task Tracker';


  constructor() { } // runs whenever an object is initalized

  ngOnInit(): void { // Anything you want to run when the component is init
  }

  toggleAddTask() {
    console.log('toggle')
  }

}
