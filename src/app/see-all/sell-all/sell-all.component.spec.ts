import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellAllComponent } from './sell-all.component';

describe('SellAllComponent', () => {
  let component: SellAllComponent;
  let fixture: ComponentFixture<SellAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
