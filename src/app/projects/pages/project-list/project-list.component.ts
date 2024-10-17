import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];
  loading: boolean = false;

  constructor(
    private projectService: ProjectService, 
    private router: Router, 
    private confirmationService: ConfirmationService,
    private messageService: MessageService) {}

  ngOnInit(): void {
    this.loading = true;
    this.projectService.getProjects().subscribe(
      (projects) => {
        this.projects = projects;
        console.log(projects)
        this.loading = false;
      },
      (error) => {
        console.error('Error al obtener los proyectos', error);
        this.loading = false;
      }
    );
  }

  viewTasks(projectId: number): void {
    this.router.navigate(['/tasks'], {
      queryParams: { projectId: projectId },
    });
  }

  createProject(): void {
    this.router.navigate(['/projects/create']);
  }

  editProject(projectId: number): void {
    this.router.navigate(['/projects/edit', projectId]);
  }

  confirmDeleteProject(projectId: number): void {
    console.log('entro al eliminar');
    this.confirmationService.confirm({
      message: '¿Estás seguro de que deseas eliminar este proyecto?',
      header: 'Confirmar Eliminación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteProject(projectId);
      },
    });
  }

  deleteProject(projectId: number): void {
    console.log('empezar a eliminar');
    this.projectService.deleteProject(projectId).subscribe(
      (projects) => {
        this.projects = projects
        this.messageService.add({
          severity: 'success',
          summary: 'Proyecto Eliminado',
          detail: 'El proyecto ha sido eliminado exitosamente',
        });
      },
      (error) => {
        console.error('Error al eliminar el proyecto', error);
      }
    );
  }
}
