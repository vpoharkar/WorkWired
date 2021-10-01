import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LeftGlobalNavigationComponent } from './left-global-navigation.component';

describe('LeftGlobalNavigationComponent', () => {
  let component: LeftGlobalNavigationComponent;
  let fixture: ComponentFixture<LeftGlobalNavigationComponent>;

  beforeEach(waitForAsync(() => {
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
