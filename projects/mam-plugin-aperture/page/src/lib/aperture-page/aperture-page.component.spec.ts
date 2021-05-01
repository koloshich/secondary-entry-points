import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AperturePageComponent } from './aperture-page.component';

describe('AperturePageComponent', () => {
  let component: AperturePageComponent;
  let fixture: ComponentFixture<AperturePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AperturePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AperturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
