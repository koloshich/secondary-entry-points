import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MamCoreComponent } from './mam-core.component';

describe('MamCoreComponent', () => {
  let component: MamCoreComponent;
  let fixture: ComponentFixture<MamCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MamCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MamCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
