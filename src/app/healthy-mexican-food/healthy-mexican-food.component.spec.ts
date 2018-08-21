import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthyMexicanFoodComponent } from './healthy-mexican-food.component';

describe('HealthyMexicanFoodComponent', () => {
  let component: HealthyMexicanFoodComponent;
  let fixture: ComponentFixture<HealthyMexicanFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthyMexicanFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthyMexicanFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
