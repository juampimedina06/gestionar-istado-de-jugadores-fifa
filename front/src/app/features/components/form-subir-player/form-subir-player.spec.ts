import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubirPlayer } from './form-subir-player';

describe('FormSubirPlayer', () => {
  let component: FormSubirPlayer;
  let fixture: ComponentFixture<FormSubirPlayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSubirPlayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSubirPlayer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
