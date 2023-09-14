import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetingComponent } from './forgeting.component';

describe('ForgetingComponent', () => {
  let component: ForgetingComponent;
  let fixture: ComponentFixture<ForgetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
