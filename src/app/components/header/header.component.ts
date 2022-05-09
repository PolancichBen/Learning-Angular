import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Task Tracker';
  showAddTask: boolean; 
  subscription: Subscription;


  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((bool) => this.showAddTask = bool);

   } // runs whenever an object is initalized

  ngOnInit(): void { // Anything you want to run when the component is init
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

}
