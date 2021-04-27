import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MamPluginApertureComponent } from './mam-plugin-aperture.component';

describe('MamPluginApertureComponent', () => {
  let component: MamPluginApertureComponent;
  let fixture: ComponentFixture<MamPluginApertureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MamPluginApertureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MamPluginApertureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
