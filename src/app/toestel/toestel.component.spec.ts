import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToestelComponent } from './toestel.component';

describe('ToestelComponent', () => {
  let component: ToestelComponent;
  let fixture: ComponentFixture<ToestelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToestelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToestelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
