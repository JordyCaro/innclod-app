import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectCreateComponent } from './pages/project-create/project-create.component';
import { ProjectEditComponent } from './pages/project-edit/project-edit.component';

const routes: Routes = [
  { path: '', component: ProjectListComponent },
  { path: 'create', component: ProjectCreateComponent },
  { path: 'edit/:id', component: ProjectEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
