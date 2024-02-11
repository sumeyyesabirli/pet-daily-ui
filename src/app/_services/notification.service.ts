import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Injectable()
export class NotificationService {
  constructor(private notifierService: NotifierService) { }

  notify(type: string, message: string) {
    this.notifierService.notify(type, message);
  }

  notifier(type: string, message: string, title: string) {
    this.notifierService.notify(type, message, title);
  }

  success(message: string) {
    this.notify('success', message);
  }

  error(message: string) {
    this.notify('error', message);
  }

  warning(message: string) {
    this.notify('warning', message);
  }
}

