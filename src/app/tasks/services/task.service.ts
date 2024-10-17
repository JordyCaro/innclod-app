import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task, ResponseTask } from '../models/task.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  private tasks: Task[] = [];

  constructor(private http: HttpClient) {}

  getTasksByProjectId(projectId: number): Observable<Task[]> {
    if (this.tasks.length > 0) {
      return of(this.tasks.filter((t) => t.projectId === projectId));
    } else {
      return this.http.get<any[]>(this.apiUrl).pipe(
        map((tasks) =>
          tasks.map((task) => ({
            id: task.id,
            projectId: task.userId,
            title: task.title,
            completed: task.completed,
          }))
        ),
        map((tasks) => {
          this.tasks = tasks;
          return this.tasks.filter((t) => t.projectId === projectId);
        })
      );
    }
  }

  getTaskById(id: number): Observable<Task> {
    const task = this.tasks.find((t) => t.id === id)!;
    return of(task);
  }

  createTask(task: Task): Observable<Task> {
    task.id = this.tasks.length + 1;
    this.tasks.push(task);
    return of(task);
  }

  updateTask(task: Task): Observable<Task | null> {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
      return of(task);
    } else {
      return of(null);
    }
  }

    deleteTask(id: number): Observable<void> {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    return of();
  }
}

