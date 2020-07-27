import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AktivMerkozesekComponent } from './aktiv-merkozesek.component';

describe('AktivMerkozesekComponent', () => {
  let component: AktivMerkozesekComponent;
  let fixture: ComponentFixture<AktivMerkozesekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AktivMerkozesekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AktivMerkozesekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
