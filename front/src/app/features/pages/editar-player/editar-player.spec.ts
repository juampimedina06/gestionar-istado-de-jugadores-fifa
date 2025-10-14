import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPlayer } from './editar-player';

describe('EditarPlayer', () => {
  let component: EditarPlayer;
  let fixture: ComponentFixture<EditarPlayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarPlayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPlayer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
