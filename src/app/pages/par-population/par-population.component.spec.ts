import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParPopulationComponent } from './par-population.component';

describe('ParPopulationComponent', () => {
  let component: ParPopulationComponent;
  let fixture: ComponentFixture<ParPopulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParPopulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParPopulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
