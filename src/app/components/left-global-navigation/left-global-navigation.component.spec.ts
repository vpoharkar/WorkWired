import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftGlobalNavigationComponent } from './left-global-navigation.component';

describe('LeftGlobalNavigationComponent', () => {
  let component: LeftGlobalNavigationComponent;
  let fixture: ComponentFixture<LeftGlobalNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftGlobalNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftGlobalNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
