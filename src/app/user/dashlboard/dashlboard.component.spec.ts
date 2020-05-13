import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashlboardComponent } from './dashlboard.component';

describe('DashlboardComponent', () => {
  let component: DashlboardComponent;
  let fixture: ComponentFixture<DashlboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashlboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashlboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
