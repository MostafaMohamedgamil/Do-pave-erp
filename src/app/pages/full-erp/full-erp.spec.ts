import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullErp } from './full-erp';

describe('FullErp', () => {
  let component: FullErp;
  let fixture: ComponentFixture<FullErp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullErp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullErp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
