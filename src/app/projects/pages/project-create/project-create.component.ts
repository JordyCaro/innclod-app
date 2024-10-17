import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss'],
})
export class ProjectCreateComponent {
  constructor(
    private projectService: ProjectService,
    private router: Router
  ) {}

  onFormSubmit(project: Project): void {
    this.projectService.createProject(project).subscribe(
      () => {
        this.router.navigate(['/projects']);
      },
      (error) => {
        console.error('Error al crear el proyecto', error);
      }
    );
  }
}
