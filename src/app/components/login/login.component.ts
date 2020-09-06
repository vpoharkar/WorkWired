import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // constructor() { }

  ngOnInit(): void {
  }


  //TODO :=> Automate both register and login forms with validations

  loginForm: FormGroup;
  forgotPasswordForm: FormGroup;
  showForgotPassword: Boolean = false;
  showSignIn: Boolean = true;

  // temporary data
  // later this data will be populated based on service APIs
  EMPLOYEE_ROLES = ['TEAM LEAD', 'DEVELOPER', 'TESTER', 'DATABASE DESIGNER'];
  projectList: any[] = [
    {id: 101, value: 'SAMPLE_PROJECT'},
    {id: 102, value: 'WEB_PROJECT'},
    {id: 103, value: 'WEB_TEST_PROJECT'},
    {id: 104, value: 'SAMPLE_CHAIN_PROJECT'},
    {id: 105, value: 'SAMPLE_E2E_PROJECT'}
  ];
  ERROR_MODEL = {
    invalid_employee_ID: 'Please enter valid employee ID',
    invalid_employee_ID_length: 'The employee ID should be at least 3 characters long.'
  };
  errors = {
    type: '',
    value: ''
  };

  // convenience getter for easy access to form fields
  // get f() { return this.registerForm.controls; }

    constructor(
        private route: Router,
        private fb: FormBuilder
    ) {
        this.loginForm = new FormGroup({
          username: new FormControl('', [Validators.required]),
          password: new FormControl('', [Validators.required]),
        });
        this.forgotPasswordForm = new FormGroup({
          referenceEmail: new FormControl('', [Validators.required]),
        });
    }

    // in use for new mockup
    registerUser() {
      console.log('Hi user: ', this.loginForm.controls.username.value);
      this.route.navigate(['register']);
    }
    isFieldValid(field: string) {
      return !this.loginForm.get(field).valid && this.loginForm.get(field).touched;
    }
    
    // forgotPasswordCSS(field) {
    //   return {
    //     'remove-margin': this.isFieldValid(field)
    //   }
    // }

    displayFieldCss(field: string) {
      return {
        'has-error': this.isFieldValid(field),
        'has-feedback': this.isFieldValid(field)
      };
    }
  
    login() {
      console.log(this.loginForm);
      if (this.loginForm.valid) {
        console.log('form submitted');
        this.route.navigate(['getting-started']);
      } else {
        this.validateAllFormFields(this.loginForm);
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

    restPassword() {
      $('.toast').toast('show');
    }

    loginWithThirdPartySites(selectedOption: String) {
      alert('This version does not contain redirected ' + selectedOption + ' website')
    }
}
