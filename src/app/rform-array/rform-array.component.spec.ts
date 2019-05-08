import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RformArrayComponent } from './rform-array.component';

describe('RformArrayComponent', () => {
  let component: RformArrayComponent;
  let fixture: ComponentFixture<RformArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RformArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RformArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
