import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnhealthyJapaneseFoodComponent } from './unhealthy-japanese-food.component';

describe('UnhealthyJapaneseFoodComponent', () => {
  let component: UnhealthyJapaneseFoodComponent;
  let fixture: ComponentFixture<UnhealthyJapaneseFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnhealthyJapaneseFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnhealthyJapaneseFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
