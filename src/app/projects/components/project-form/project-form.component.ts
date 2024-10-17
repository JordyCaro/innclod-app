import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
})
export class ProjectFormComponent implements OnInit {
  @Input() project: Project | null = null;
  @Output() formSubmit = new EventEmitter<Project>();

  projectForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      title: [this.project?.title || '', Validators.required],
      description: [this.project?.description || ''],
    });
  }

  onSubmit(): void {
    if (this.projectForm.valid) {
      const newProject: Project = {
        ...this.project,
        ...this.projectForm.value,
      };
      this.formSubmit.emit(newProject);
    }
  }

  get title() {
    return this.projectForm.get('title');
  }
  
  get description() {
    return this.projectForm.get('description');
  }
}
