import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlayers } from './list-players';

describe('ListPlayers', () => {
  let component: ListPlayers;
  let fixture: ComponentFixture<ListPlayers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPlayers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPlayers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
