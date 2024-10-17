import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListComponent } from './pages/project-list/project-list.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProjectEditComponent } from './pages/project-edit/project-edit.component';
import { ProjectCreateComponent } from './pages/project-create/project-create.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [
    ProjectListComponent, 
    ProjectFormComponent,
    ProjectEditComponent,
    ProjectCreateComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    CardModule,
    ButtonModule,
    ProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    MessageModule,
    MessagesModule,
    ConfirmDialogModule,
  ],
  providers: [ConfirmationService],
  exports: [ProjectFormComponent],
})
export class ProjectsModule {}
