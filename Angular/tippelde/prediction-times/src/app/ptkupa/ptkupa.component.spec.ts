import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtkupaComponent } from './ptkupa.component';

describe('PtkupaComponent', () => {
  let component: PtkupaComponent;
  let fixture: ComponentFixture<PtkupaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtkupaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtkupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
