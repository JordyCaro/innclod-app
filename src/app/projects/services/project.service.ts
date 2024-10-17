import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Project } from '../models/project.model';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiUrl = `${environment.apiUrl}/users`;
  private projects: Project[] = [];

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    if (this.projects.length > 0) {
      return of(this.projects);
    } else {
      return this.http.get<any[]>(this.apiUrl).pipe(
        map((users) =>
          users.map((user) => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            address: {
              street: user.address.street,
              suite: user.address.suite,
              city: user.address.city,
              zipcode: user.address.zipcode,
              geo: {
                lat: user.address.geo.lat,
                lng: user.address.geo.lng,
              },
            },
            phone: user.phone,
            website: user.website,
            company: {
              name: user.company.name,
              catchPhrase: user.company.catchPhrase,
              bs: user.company.bs,
            },
          }))
        ),
        map((projects) => {
          this.projects = projects;
          return projects;
        })
      );
    }
  }

  getProjectById(id: number): Observable<Project> {
    const project = this.projects.find((p) => p.id === id);
    if (project) {
      return of(project);
    } else {
      return throwError(
        () =>
          new HttpErrorResponse({
            error: 'Project not found',
            status: 404,
            statusText: 'Not Found',
          })
      );
    }
  }

  createProject(project: Project): Observable<Project> {
    project.id = this.projects.length + 1;
    this.projects.push(project);
    return of(project);
  }

  updateProject(project: Project): Observable<Project> {
    const index = this.projects.findIndex((p) => p.id === project.id);
    if (index !== -1) {
      this.projects[index] = project;
      return of(project);
    } else {
      return throwError(() => new Error(`No se encontró el proyecto con id ${project.id}`));
    }
  }

  deleteProject(id: number): Observable<Project[]> {
    this.projects = this.projects.filter((p) => p.id !== id);
    return of(this.projects);
  }
}
