import { Component } from '@angular/core';

import { NonNullableFormBuilder } from '@angular/forms';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formData = this.formBuilder.group({
    email: [''],
    password: [''],
  });

  isLoading = false;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: UserService
  ) {}

  onLogin() {
    this.isLoading = true;
    if (this.service.isLoggedIn()) {
      this.service.logout();
    } else {
      this.service.login(this.formData.value).subscribe(
        (result) => {console.log(result)},
        () => (this.isLoading = false)
      );
    }
  }
}
