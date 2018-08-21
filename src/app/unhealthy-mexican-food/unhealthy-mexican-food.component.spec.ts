import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnhealthyMexicanFoodComponent } from './unhealthy-mexican-food.component';

describe('UnhealthyMexicanFoodComponent', () => {
  let component: UnhealthyMexicanFoodComponent;
  let fixture: ComponentFixture<UnhealthyMexicanFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnhealthyMexicanFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnhealthyMexicanFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
