import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accountant } from './accountant';

describe('Accountant', () => {
  let component: Accountant;
  let fixture: ComponentFixture<Accountant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Accountant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Accountant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
