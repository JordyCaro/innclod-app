import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];
  loading: boolean = false;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.loading = true;
    this.projectService.getProjects().subscribe(
      (projects) => {
        this.projects = projects;
        this.loading = false;
      },
      (error) => {
        console.error('Error al obtener los proyectos', error);
        this.loading = false;
      }
    );
  }
}
