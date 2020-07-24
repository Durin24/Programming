import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegfrissebbTortenesekComponent } from './legfrissebb-tortenesek.component';

describe('LegfrissebbTortenesekComponent', () => {
  let component: LegfrissebbTortenesekComponent;
  let fixture: ComponentFixture<LegfrissebbTortenesekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegfrissebbTortenesekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegfrissebbTortenesekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
