import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TermsOfUserComponent } from './terms-of-user.component';

describe('TermsOfUserComponent', () => {
  let component: TermsOfUserComponent;
  let fixture: ComponentFixture<TermsOfUserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsOfUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsOfUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
