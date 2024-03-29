import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TaskProviderComponent } from './task-provider.component';

describe('TaskProviderComponent', () => {
  let component: TaskProviderComponent;
  let fixture: ComponentFixture<TaskProviderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
