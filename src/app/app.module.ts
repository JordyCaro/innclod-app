import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AuthService } from './auth/services/auth.service';
import { AuthGuard } from './core/guards/auth.guard';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './core/interceptors/http-error.interceptor';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';

@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [
      BrowserModule,
      RouterModule,
      AppRoutingModule,
      MenubarModule,
      CardModule,
      ButtonModule,
      HttpClientModule,
      BrowserModule,
      BrowserAnimationsModule,  
      ToastModule,
    ],
    providers: [
      AuthService, 
      AuthGuard,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpErrorInterceptor,
        multi: true,
      },
      MessageService,
    ],
    bootstrap: [AppComponent],
  })
  export class AppModule {}