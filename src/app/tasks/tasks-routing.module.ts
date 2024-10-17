import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskCreateComponent } from './pages/task-create/task-create.component';
import { TaskEditComponent } from './pages/task-edit/task-edit.component';

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'create', component: TaskCreateComponent },
  { path: 'edit/:id', component: TaskEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
