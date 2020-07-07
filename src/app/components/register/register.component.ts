import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private route: Router) { }

  // register() {
  //   console.log('register: ', this.registerForm.controls.username.value);
  //   this.route.navigate(['task-form']);
  // }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      policyCheck: new FormControl('', Validators.required)
    });
  }

  isFieldValid(field: string) {
    return !this.registerForm.get(field).valid && this.registerForm.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  register() {
    console.log(this.registerForm);
    if (this.registerForm.valid) {
      console.log('form submitted');
      this.route.navigate(['task-form']);
    } else {
      this.validateAllFormFields(this.registerForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  goToPolicy() {
    this.route.navigate(['terms-and-conditions']);
  }

}
