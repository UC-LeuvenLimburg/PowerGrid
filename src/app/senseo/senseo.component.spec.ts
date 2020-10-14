import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenseoComponent } from './senseo.component';

describe('SenseoComponent', () => {
  let component: SenseoComponent;
  let fixture: ComponentFixture<SenseoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenseoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenseoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
