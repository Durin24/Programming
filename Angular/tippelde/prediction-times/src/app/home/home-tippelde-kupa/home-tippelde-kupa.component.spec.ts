import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTippeldeKupaComponent } from './home-tippelde-kupa.component';

describe('HomeTippeldeKupaComponent', () => {
  let component: HomeTippeldeKupaComponent;
  let fixture: ComponentFixture<HomeTippeldeKupaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTippeldeKupaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTippeldeKupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
