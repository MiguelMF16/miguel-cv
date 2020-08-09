import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbararComponent } from './navbarar.component';

describe('NavbararComponent', () => {
  let component: NavbararComponent;
  let fixture: ComponentFixture<NavbararComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbararComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbararComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
