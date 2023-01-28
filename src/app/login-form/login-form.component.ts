import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  isValidLogin = true;
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(public loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.loginService.loginForm(this.form.value.username, this.form.value.password).subscribe(loginData => {
      this.isValidLogin = loginData.data;
      if (loginData.data) {
        this.router.navigate(['dashboard']);
      }
    })
  }

}
