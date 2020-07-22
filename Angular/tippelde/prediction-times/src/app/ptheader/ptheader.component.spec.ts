import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtheaderComponent } from './ptheader.component';

describe('PtheaderComponent', () => {
  let component: PtheaderComponent;
  let fixture: ComponentFixture<PtheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
