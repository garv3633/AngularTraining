import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationError:string;
  registerForm:FormGroup;

  constructor(private fb:FormBuilder,
              private userService:UserService,
              private router:Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name:[],
      email:[],
      password:[]
    })
  }

  onRegister(){
    this.userService.register(this.registerForm.value)
                    .subscribe(
                      data=>{
                        window.alert("Registration complete !!")
                        this.router.navigate(['/movies'])
                      },
                      error=>{
                        this.registrationError=error.error
                      }
                    )
  }
}
