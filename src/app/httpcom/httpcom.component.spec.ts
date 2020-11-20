import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpcomComponent } from './httpcom.component';

describe('HttpcomComponent', () => {
  let component: HttpcomComponent;
  let fixture: ComponentFixture<HttpcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
