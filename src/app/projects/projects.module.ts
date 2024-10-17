import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListComponent } from './pages/project-list/project-list.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [ProjectListComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    CardModule,
    ButtonModule,
    ProgressSpinnerModule,
  ],
})
export class ProjectsModule {}
