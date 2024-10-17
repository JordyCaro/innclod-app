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
      name: [this.project?.name || '', Validators.required],
      username: [this.project?.username || '', Validators.required], 
      email: [
        this.project?.email || '',
        [Validators.required, Validators.email],
      ],
      phone: [this.project?.phone || '', Validators.required],
      website: [
        this.project?.website || '',
      ],
      company: [this.project?.company.name || '', Validators.required],
      catchPhrase: [this.project?.company.catchPhrase || '', Validators.required], 
      bs: [this.project?.company.bs || '', Validators.required], 
    });
  }

  onSubmit(): void {
    if (this.projectForm.valid) {
      const newProject: Project = {
        ...this.project,
        ...this.projectForm.value,
        company:{
          bs:this.projectForm.value.bs,
          catchPhrase:this.projectForm.value.catchPhrase,
          name:this.projectForm.value.name,
        }
      };
      this.formSubmit.emit(newProject);
      console.log(this.projectForm.value.bs)
    }
  }

  get name() {
    return this.projectForm.get('name');
  }

  get email() {
    return this.projectForm.get('email');
  }
}
