import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCuisineComponent } from './page-cuisine.component';

describe('PageCuisineComponent', () => {
  let component: PageCuisineComponent;
  let fixture: ComponentFixture<PageCuisineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCuisineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageCuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
