import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerStartComponent } from './beer-start.component';

describe('BeerStartComponent', () => {
  let component: BeerStartComponent;
  let fixture: ComponentFixture<BeerStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
