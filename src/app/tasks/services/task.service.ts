import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task, ResponseTask } from '../models/task.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getTasksByProjectId(projectId: number): Observable<Task[]> {
    return this.http.get<ResponseTask[]>(this.apiUrl).pipe(
      map((tasks) =>
        tasks
          .filter((task) => task.userId === projectId) 
          .map((task) => ({
            id: task.id,
            projectId: task.userId,
            title: task.title,
            completed: task.completed,
          }))
      )
    );
  }
}
