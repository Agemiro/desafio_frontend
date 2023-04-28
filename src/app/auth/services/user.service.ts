import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import Conf from '../../conf/conf';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly API = `${Conf.baseURL}auth/signin`;

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(user: Partial<User>) {
    let data = this.httpClient.post<User>(this.API, user);
    data.subscribe((result) => {
      localStorage.setItem(
        'token',
        JSON.parse(JSON.stringify(result)).access_token
      );
      this.isLoggedIn();
      this.router.navigate(['abertura']);
    });
    return data;
  }

  logout(): void {
    localStorage.clear();
    this.isLoggedIn();
    this.router.navigate(['login']);
  }

  isLoggedIn = () => !!localStorage.getItem('token');
}
