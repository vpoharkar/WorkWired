import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

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
  registerForm: FormGroup;
  showRegisterform: Boolean = false;
  formSubmitted: Boolean= false;

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
  get f() { return this.registerForm.controls; }

    constructor(
        private route: Router,
        private fb: FormBuilder
    ) {
        this.loginForm = new FormGroup({
          username: new FormControl('', [Validators.required, Validators.email]),
          password: new FormControl('', [Validators.required]),
        });
        this.registerForm = new FormGroup({
          projectName: new FormControl('', Validators.required),
          projectId: new FormControl(''), // validators to be added later
          employeeName: new FormControl('', Validators.required),
          employeeId: new FormControl('', Validators.required),
          role: new FormControl('', Validators.required),
          registerEmail: new FormControl('', Validators.email),
          newPassword: new FormControl('', Validators.required)
        })
    }

    login() {
        console.log('Hi user: ', this.loginForm.controls.username.value);
        this.route.navigate(['task-form']);
    }

    onProjectSelect() {
      if(this.registerForm.controls['projectName'].value !== '') {
        let matchedRecord = this.projectList.find(result => result.value === this.registerForm.controls['projectName'].value);
        this.registerForm.controls['projectId'].patchValue(matchedRecord.id);
      } else {
        this.registerForm.controls['projectId'].patchValue('');
      }
    }

    onRoleSelect(role: string) {
      if (role) {
        this.registerForm.controls['role'].patchValue(role);
      } else {
        this.registerForm.controls['role'].patchValue('')
      }
    }

    validate() {
      console.log("in validate");
      if(this.f.employeeId.errors) {
        if(this.f.employeeId.errors.minlength) {
          this.errors.type = 'email_length',
          this.errors.value = this.ERROR_MODEL.invalid_employee_ID_length
        } else if(this.f.employeeId.errors.required) {
          this.errors.type = 'email_required',
          this.errors.value = this.ERROR_MODEL.invalid_employee_ID
        }
      }
    }

    register() {

      this.formSubmitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
    }
}
