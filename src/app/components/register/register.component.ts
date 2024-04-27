import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, UntypedFormGroup, UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: UntypedFormGroup;

  constructor(private route: Router) { }

  // register() {
  //   console.log('register: ', this.registerForm.controls.username.value);
  //   this.route.navigate(['task-form']);
  // }

  ngOnInit(): void {
    this.registerForm = new UntypedFormGroup({
      fullName: new UntypedFormControl('', Validators.required),
      username: new UntypedFormControl('', Validators.required),
      email: new UntypedFormControl('', Validators.required),
      password: new UntypedFormControl('', Validators.required),
      confirmPassword: new UntypedFormControl('', Validators.required),
      policyCheck: new UntypedFormControl('', Validators.required)
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
      this.route.navigate(['getting-started']);
    } else {
      this.validateAllFormFields(this.registerForm);
    }
  }

  validateAllFormFields(formGroup: UntypedFormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof UntypedFormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof UntypedFormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  goToPolicy() {
    this.route.navigate(['terms-and-conditions']);
  }

}
