import { Injectable } from '@angular/core';

import Conf from '../conf/conf';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesignService {
  private readonly API = `${Conf.baseURL}`;

  private token = localStorage.getItem('token')!;

  constructor(private httpClient: HttpClient) {}

  listAllDesigns() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      }),
    };
    return this.httpClient
      .get(
        `${
          this.API
        }/${'document?total_per_page=10&order_by=title&order_orientation=desc'}`,
        httpOptions
      )
      .pipe(
        first(),
        tap((designes) => console.log(designes))
      );
  }
}
