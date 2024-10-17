import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((users) =>
        users.map((user) => ({
          id: user.id,
          title: user.company.name,
          description: user.company.catchPhrase,
        }))
      )
    );
  }
}
