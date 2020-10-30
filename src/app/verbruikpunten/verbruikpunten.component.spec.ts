import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbruikpuntenComponent } from './verbruikpunten.component';

describe('VerbruikpuntenComponent', () => {
  let component: VerbruikpuntenComponent;
  let fixture: ComponentFixture<VerbruikpuntenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerbruikpuntenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbruikpuntenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
