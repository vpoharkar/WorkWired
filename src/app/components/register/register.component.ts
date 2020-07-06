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

  register() {
    console.log('register: ', this.registerForm.controls.username.value);
    this.route.navigate(['task-form']);
  }

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

}
