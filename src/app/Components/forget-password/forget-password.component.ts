import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {VaetasService} from '../../services/vaetas.service';
import {Router} from '@angular/router';
import {AlertService} from '../../services/alert.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  passwordResetForm: FormGroup;
  constructor(public vaetas: VaetasService, public router: Router, public alertService: AlertService) { }

  ngOnInit() {
    this.passwordResetForm = new FormGroup({
      'email': new FormControl(null, [Validators.email, Validators.required]),
    });
  }

   reset() {
    const email = this.passwordResetForm.value.email;
     this.vaetas.resetPassword(email).subscribe(
      (response) => {
        this.alertService.success('An Email has been sent to' +  '  ' +  this.passwordResetForm.get('email').value, 3000);
      },
      (error) => {
        this.alertService.error(error.message, 3000);
      });
  }
}
