import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParProvinceComponent } from './par-province.component';

describe('ParProvinceComponent', () => {
  let component: ParProvinceComponent;
  let fixture: ComponentFixture<ParProvinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParProvinceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
