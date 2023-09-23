import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForTutorComponent } from './search-for-tutor.component';

describe('SearchForTutorComponent', () => {
  let component: SearchForTutorComponent;
  let fixture: ComponentFixture<SearchForTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchForTutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchForTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
