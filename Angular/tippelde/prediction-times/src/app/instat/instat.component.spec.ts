import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstatComponent } from './instat.component';

describe('InstatComponent', () => {
  let component: InstatComponent;
  let fixture: ComponentFixture<InstatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
