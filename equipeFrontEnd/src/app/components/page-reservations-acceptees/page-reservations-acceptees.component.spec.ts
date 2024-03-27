import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReservationsAccepteesComponent } from './page-reservations-acceptees.component';

describe('PageReservationsAccepteesComponent', () => {
  let component: PageReservationsAccepteesComponent;
  let fixture: ComponentFixture<PageReservationsAccepteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageReservationsAccepteesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageReservationsAccepteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
