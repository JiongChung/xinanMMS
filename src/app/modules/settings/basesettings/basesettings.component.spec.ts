import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasesettingsComponent } from './basesettings.component';

describe('BasesettingsComponent', () => {
  let component: BasesettingsComponent;
  let fixture: ComponentFixture<BasesettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasesettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasesettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
