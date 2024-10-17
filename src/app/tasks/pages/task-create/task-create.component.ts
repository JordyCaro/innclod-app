import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss'],
})
export class TaskCreateComponent implements OnInit {
  projectId!: number;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // ngOnInit(): void {
  //   this.projectId = Number(this.route.snapshot.queryParamMap.get('projectId'));
  // }

  ngOnInit(): void {
    const projectId = this.route.snapshot.queryParamMap.get('projectId');
    if (projectId !== null) {
      this.projectId = +projectId;
    }
  }

  onFormSubmit(task: Task): void {
    this.taskService.createTask(task).subscribe(
      () => {
        this.router.navigate(['/tasks'], {
          queryParams: { projectId: this.projectId },
        });
      },
      (error) => {
        console.error('Error al crear la tarea', error);
      }
    );
  }
}
