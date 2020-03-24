import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcDetailsComponent } from './pc-details.component';

describe('PcDetailsComponent', () => {
  let component: PcDetailsComponent;
  let fixture: ComponentFixture<PcDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
