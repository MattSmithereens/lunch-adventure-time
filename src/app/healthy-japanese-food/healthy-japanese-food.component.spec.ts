import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthyJapaneseFoodComponent } from './healthy-japanese-food.component';

describe('HealthyJapaneseFoodComponent', () => {
  let component: HealthyJapaneseFoodComponent;
  let fixture: ComponentFixture<HealthyJapaneseFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthyJapaneseFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthyJapaneseFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
