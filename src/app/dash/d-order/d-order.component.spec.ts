import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DOrderComponent } from './d-order.component';

describe('DOrderComponent', () => {
  let component: DOrderComponent;
  let fixture: ComponentFixture<DOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
