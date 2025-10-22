import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditarPlayer } from './form-editar-player';

describe('FormEditarPlayer', () => {
  let component: FormEditarPlayer;
  let fixture: ComponentFixture<FormEditarPlayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEditarPlayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditarPlayer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
