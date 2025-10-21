import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputReutilizable } from './input-reutilizable';

describe('InputReutilizable', () => {
  let component: InputReutilizable;
  let fixture: ComponentFixture<InputReutilizable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputReutilizable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputReutilizable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
