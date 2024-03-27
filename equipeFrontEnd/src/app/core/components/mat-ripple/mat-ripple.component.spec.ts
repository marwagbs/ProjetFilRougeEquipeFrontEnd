import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatRippleComponent } from './mat-ripple.component';

describe('MatRippleComponent', () => {
  let component: MatRippleComponent;
  let fixture: ComponentFixture<MatRippleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatRippleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatRippleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
