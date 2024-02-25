import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class NotificationService {
  constructor(private notifierService: ToastrService) {}

  notifySuccess(message: string) {
    this.notifierService.success(message);
  }

  notifyError(message: string) {
    this.notifierService.error(message);
  }

  notifyWarning(message: string) {
    this.notifierService.warning(message);
  }
}
