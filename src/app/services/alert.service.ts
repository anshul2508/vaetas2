import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class AlertService {

  constructor( private snackbar: MatSnackBar) { }

  sucess(message: string, duration = 3000) {
    this.snackbar.open(message, '', {
      duration: duration,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      extraClasses: ['alert', 'alert-success']
    });
  }


  error(message: string, duration: 3000) {
    this.snackbar.open(message, '', {
      duration: duration,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      extraClasses: ['alert', 'alert-error']
    });
  }
}
