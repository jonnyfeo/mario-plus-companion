import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mundos } from './mundos';

describe('Mundos', () => {
  let component: Mundos;
  let fixture: ComponentFixture<Mundos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mundos],
    }).compileComponents();

    fixture = TestBed.createComponent(Mundos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
