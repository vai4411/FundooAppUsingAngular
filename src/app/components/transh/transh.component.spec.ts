import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranshComponent } from './transh.component';

describe('TranshComponent', () => {
  let component: TranshComponent;
  let fixture: ComponentFixture<TranshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
