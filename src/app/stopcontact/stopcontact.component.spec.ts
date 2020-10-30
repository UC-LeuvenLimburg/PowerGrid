import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopcontactComponent } from './stopcontact.component';

describe('StopcontactComponent', () => {
  let component: StopcontactComponent;
  let fixture: ComponentFixture<StopcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopcontactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StopcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
