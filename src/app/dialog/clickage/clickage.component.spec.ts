import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickageComponent } from './clickage.component';

describe('ClickageComponent', () => {
  let component: ClickageComponent;
  let fixture: ComponentFixture<ClickageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
