import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading: Boolean = false;

  constructor(private _formBuilder: FormBuilder,
              private _snackBar: MatSnackBar,
              private _router: Router) {
    this.form = this._formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  singIn() {
    const user: String = this.form.value.user;
    const password: String = this.form.value.password;
    if (user == 'user' && password == '123') {
      // User can sing in
      this.loading = true;
      setTimeout(()=>{
        this._router.navigate(['dashboard']);
      }, 1500);
    } else {
      // User receive an error message
      this.error();
      this.form.reset();
    }
  }

  error() {
    this._snackBar.open('User or Password are invalid', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  ngOnInit(): void {
  }

}
