import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParDensiteComponent } from './par-densite.component';

describe('ParDensiteComponent', () => {
  let component: ParDensiteComponent;
  let fixture: ComponentFixture<ParDensiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParDensiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParDensiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
