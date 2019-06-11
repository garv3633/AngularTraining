import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {JwtHelper} from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL = 'http://localhost:3900/api';

  constructor(private http: HttpClient, private router:Router) { }

  get currentUser(){
    const token = localStorage.getItem('token')
    if(!token)
        return null;

    const helper = new JwtHelper();
    return helper.decodeToken(token)
  }

  register(user){
    return this.http.post(this.apiURL+'/users',user)
  }

  login(user){
    return this.http.post(this.apiURL+'/auth',user,{responseType:'text'})
  }

  logout(): void {
    this.clear();
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') != null && !this.isTokenExpired();
  }

  isAdmin(): boolean{
    return this.currentUser.isAdmin
  }

  isTokenExpired(): boolean {
    return false;
  }

  clear(): void {
    localStorage.clear();
  }
}
