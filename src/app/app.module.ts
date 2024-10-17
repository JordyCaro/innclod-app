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
import { HttpClientModule } from '@angular/common/http';

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
    ],
    providers: [AuthService, AuthGuard],
    bootstrap: [AppComponent],
  })
  export class AppModule {}