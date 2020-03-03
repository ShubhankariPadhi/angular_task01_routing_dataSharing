import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfFormValidationComponent } from './tdf-form-validation.component';

describe('TdfFormValidationComponent', () => {
  let component: TdfFormValidationComponent;
  let fixture: ComponentFixture<TdfFormValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdfFormValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
