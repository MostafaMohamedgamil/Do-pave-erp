import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erp } from './erp';

describe('Erp', () => {
  let component: Erp;
  let fixture: ComponentFixture<Erp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Erp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Erp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
