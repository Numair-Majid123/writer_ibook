import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookShareFormComponent } from './book-share-form.component';

describe('BookShareFormComponent', () => {
  let component: BookShareFormComponent;
  let fixture: ComponentFixture<BookShareFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookShareFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookShareFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
