import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  loading: boolean = false;
  projectId: number | undefined;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.projectId = +params['projectId'];
      if (this.projectId) {
        this.loadTasks(this.projectId);
      }
    });
  }

  loadTasks(projectId: number): void {
    this.loading = true;
    this.taskService.getTasksByProjectId(projectId).subscribe(
      (tasks) => {
        this.tasks = tasks;
        this.loading = false;
      },
      (error) => {
        console.error('Error al obtener las tareas', error);
        this.loading = false;
      }
    );
  }
}
