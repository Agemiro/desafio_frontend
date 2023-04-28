import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/auth/services/user.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  currentDate = new Date();

  requestedBackground = '';
  colorLogo = '';

  constructor(private service: UserService) {}

  @Input()
  set value(value: string) {
    value === 'courseware'
      ? (this.colorLogo = '../../../../assets/darkest-logo.svg')
      : (this.colorLogo = '../../../../assets/white-logo.svg');
    this.requestedBackground = value;
  }

  logout() {
    this.service.logout();
  }
}
