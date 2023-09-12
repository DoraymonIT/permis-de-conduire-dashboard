import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamDateListComponent } from './exam-date-list.component';

describe('ExamDateListComponent', () => {
  let component: ExamDateListComponent;
  let fixture: ComponentFixture<ExamDateListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamDateListComponent]
    });
    fixture = TestBed.createComponent(ExamDateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
