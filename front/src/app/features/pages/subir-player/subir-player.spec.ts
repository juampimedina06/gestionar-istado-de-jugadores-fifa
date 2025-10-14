import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirPlayer } from './subir-player';

describe('SubirPlayer', () => {
  let component: SubirPlayer;
  let fixture: ComponentFixture<SubirPlayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubirPlayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubirPlayer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
