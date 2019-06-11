import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginError:string;
  constructor(private fb: FormBuilder,
              private userService:UserService,
              private router:Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [],
      password: []
    });
  }

  onLogin(){
    this.userService.login(this.loginForm.value)
                    .subscribe(
                      token=>{
                        localStorage.setItem('token',token)
                        this.router.navigate(['/movies'])
                      },
                      error=>{
                        console.log(error)
                        this.loginError=error.error
                      }
                    )
  }

}
