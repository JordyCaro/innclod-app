import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'project-management-app';
  items: MenuItem[] | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Proyectos',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: '/projects',
        visible: this.isAuthenticated(),
      },
      {
        label: 'Tareas',
        icon: 'pi pi-fw pi-check-square',
        routerLink: '/tasks',
        visible: this.isAuthenticated(),
      },
    ];
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
