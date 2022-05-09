import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// Types
import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  onDelete(task: Task) {
   this.onDeleteTask.emit(task);
  }

  ngOnInit(): void {}
}
