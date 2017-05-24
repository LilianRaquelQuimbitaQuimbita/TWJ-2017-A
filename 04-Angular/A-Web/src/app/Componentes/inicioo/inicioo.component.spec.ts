import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciooComponent } from './inicioo.component';

describe('IniciooComponent', () => {
  let component: IniciooComponent;
  let fixture: ComponentFixture<IniciooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
