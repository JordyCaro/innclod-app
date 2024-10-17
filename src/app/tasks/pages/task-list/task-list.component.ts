import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

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
    private route: ActivatedRoute,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.projectId = +params['projectId'];
      console.log(this.projectId);
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

  createTask(): void {
    this.router.navigate(['/tasks/create'], {
      queryParams: { projectId: this.projectId },
    });
  }

  editTask(taskId: number): void {
    this.router.navigate(['/tasks/edit', taskId], {
      queryParams: { projectId: this.projectId },
    });
  }

  confirmDeleteTask(taskId: number): void {
    this.confirmationService.confirm({
      message: '¿Estás seguro de que deseas eliminar esta tarea?',
      header: 'Confirmar Eliminación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteTask(taskId);
      },
    });
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Tarea Eliminada',
          detail: 'La tarea ha sido eliminada exitosamente',
        });
        this.loadTasks(this.projectId!);
      },
      (error) => {
        console.error('Error al eliminar la tarea', error);
      }
    );
  }
}
