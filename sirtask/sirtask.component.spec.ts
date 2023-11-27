import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SirtaskComponent } from './sirtask.component';

describe('SirtaskComponent', () => {
  let component: SirtaskComponent;
  let fixture: ComponentFixture<SirtaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SirtaskComponent]
    });
    fixture = TestBed.createComponent(SirtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
