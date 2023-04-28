import { Component, Input } from '@angular/core';

import { DesignService } from './../../../services/design.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-module-content',
  templateUrl: './module-content.component.html',
  styleUrls: ['./module-content.component.css'],
})
export class ModuleContentComponent {
  thumbs = { high: '' };

  data = [{ title: '', thumbs: this.thumbs, id: '' }];

  isAllList = false;

  constructor(private designService: DesignService, private router: Router) {
    this.listAll();
  }

  listAll() {
    this.designService.listAllDesigns().subscribe(
      (result) => {
        console.log(JSON.parse(JSON.stringify(result)).data[0].thumbs.high);
        this.data = JSON.parse(JSON.stringify(result)).data;
      },
      (error) => error
    );
  }

  seeAll() {
    this.router.navigate(['ver-todos']);
  }

  @Input()
  set value(value: string) {
    value === 'see-all' ? (this.isAllList = true) : (this.isAllList = false);
  }
}
