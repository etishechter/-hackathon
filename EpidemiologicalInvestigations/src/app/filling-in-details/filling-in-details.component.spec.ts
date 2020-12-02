import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillingInDetailsComponent } from './filling-in-details.component';

describe('FillingInDetailsComponent', () => {
  let component: FillingInDetailsComponent;
  let fixture: ComponentFixture<FillingInDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillingInDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillingInDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
