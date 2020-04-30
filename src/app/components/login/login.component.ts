import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

    constructor(
        private route: Router,
        private fb: FormBuilder
    ) {
        this.loginForm = new FormGroup({
            username: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required]),
          });
    }

    login() {
        console.log('Hi user: ', this.loginForm.controls.username.value);
        this.route.navigate(['task-form']);
    }
    ngOnInit() { }

}
