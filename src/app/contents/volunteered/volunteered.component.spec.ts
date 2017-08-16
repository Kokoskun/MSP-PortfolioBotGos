import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteeredComponent } from './volunteered.component';

describe('VolunteeredComponent', () => {
  let component: VolunteeredComponent;
  let fixture: ComponentFixture<VolunteeredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteeredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteeredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
