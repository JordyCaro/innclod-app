import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss'],
})
export class ProjectCreateComponent {
  constructor(
    private projectService: ProjectService,
    private router: Router,
    private messageService: MessageService
  ) {}

  onFormSubmit(project: Project): void {
    console.log(project)
    this.projectService.createProject(project).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Proyecto Creado',
          detail: 'El proyecto ha sido creado exitosamente',
        });
        this.router.navigate(['/projects']);
      },
      (error) => {
        console.error('Error al crear el proyecto', error);
      }
    );
  }
}
