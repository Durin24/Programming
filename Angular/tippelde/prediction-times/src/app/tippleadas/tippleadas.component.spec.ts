import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TippleadasComponent } from './tippleadas.component';

describe('TippleadasComponent', () => {
  let component: TippleadasComponent;
  let fixture: ComponentFixture<TippleadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TippleadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TippleadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
