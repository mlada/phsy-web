import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHelpComponent } from './test-help.component';

describe('TestHelpComponent', () => {
  let component: TestHelpComponent;
  let fixture: ComponentFixture<TestHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
