import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskListComponent } from './pages/task-list/task-list.component';

import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskEditComponent } from './pages/task-edit/task-edit.component';
import { TaskCreateComponent } from './pages/task-create/task-create.component';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [TaskListComponent, TaskFormComponent, TaskCreateComponent, TaskEditComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    TableModule,
    ProgressSpinnerModule,
    CheckboxModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    MessageModule,
    MessagesModule,
    ConfirmDialogModule,
  ],
  providers: [ConfirmationService],
  exports: [TaskFormComponent],
})
export class TasksModule {}
