import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPlayer } from './data-player';

describe('DataPlayer', () => {
  let component: DataPlayer;
  let fixture: ComponentFixture<DataPlayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataPlayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataPlayer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
