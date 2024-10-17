import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss'],
})
export class TaskEditComponent implements OnInit {
  task!: Task;
  projectId!: number;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const taskId = Number(this.route.snapshot.paramMap.get('id'));
    this.projectId = Number(this.route.snapshot.queryParamMap.get('projectId'));
    this.taskService.getTaskById(taskId).subscribe(
      (task) => {
        this.task = task;
      },
      (error) => {
        console.error('Error al obtener la tarea', error);
      }
    );
  }

  onFormSubmit(updatedTask: Task): void {
    this.taskService.updateTask(updatedTask).subscribe(
      () => {
        this.router.navigate(['/tasks'], {
          queryParams: { projectId: this.projectId },
        });
      },
      (error) => {
        console.error('Error al actualizar la tarea', error);
      }
    );
  }
}
