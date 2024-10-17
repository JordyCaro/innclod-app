import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  @Input() task: Task | null = null;
  @Input() projectId: number | undefined;
  @Output() formSubmit = new EventEmitter<Task>();

  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      completed: [false],
    });
  }

  ngOnInit(): void {
    if (this.task) {
      this.taskForm.patchValue({
        title: this.task.title,
        completed: this.task.completed,
      });
    }
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const newTask: Task = {
        ...this.task,
        ...this.taskForm.value,
        projectId: this.projectId!,
      };
      this.formSubmit.emit(newTask);
    }
  }

  get title() {
    return this.taskForm.get('title');
  }

  get completed() {
    return this.taskForm.get('completed');
  }
}
