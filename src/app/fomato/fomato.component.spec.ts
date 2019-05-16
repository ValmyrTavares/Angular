import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FomatoComponent } from './fomato.component';

describe('FomatoComponent', () => {
  let component: FomatoComponent;
  let fixture: ComponentFixture<FomatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FomatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FomatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
