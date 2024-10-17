import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss'],
})
export class ProjectEditComponent implements OnInit {
  project!: Project;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const projectId = Number(this.route.snapshot.paramMap.get('id'));
    this.projectService.getProjectById(projectId).subscribe(
      (project) => {
        this.project = project;
      },
      (error) => {
        console.error('Error al obtener el proyecto', error);
      }
    );
  }

  onFormSubmit(updatedProject: Project): void {
    this.projectService.updateProject(updatedProject).subscribe(
      () => {
        this.router.navigate(['/projects']);
      },
      (error) => {
        console.error('Error al actualizar el proyecto', error);
      }
    );
  }
}
