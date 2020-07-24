import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTabellaComponent } from './home-tabella.component';

describe('HomeTabellaComponent', () => {
  let component: HomeTabellaComponent;
  let fixture: ComponentFixture<HomeTabellaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTabellaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTabellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
