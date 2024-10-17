import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from 'primeng/api';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private messageService: MessageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let userFriendlyMessage = '';
      
        if (error.error instanceof ErrorEvent) {
          userFriendlyMessage = 'Ocurrió un error en el dispositivo. Por favor, inténtalo de nuevo.';
        } else {
          switch (error.status) {
            case 0:
              userFriendlyMessage = 'No se pudo conectar con el servidor. Verifica tu conexión a Internet.';
              break;
            case 404:
              userFriendlyMessage = 'Recurso no encontrado.';
              break;
            case 500:
              userFriendlyMessage = 'Error interno del servidor. Por favor, inténtalo más tarde.';
              break;
            default:
              userFriendlyMessage = 'Ocurrió un error inesperado.';
              break;
          }
        }
      
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: userFriendlyMessage,
        });
      
        return throwError(() => error);
      })
    );
  }
}
