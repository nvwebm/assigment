import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import Review from '../interfaces/review.interface';

import { ReviewComponent } from './review.component';

describe('ReviewComponent', () => {
  let component: ReviewComponent;
  let fixture: ComponentFixture<ReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Init props', () => {
    expect(component.review).toBeFalsy();
  });

  it('Test HTML', () => {
    const titleTxt = 'bla bla';
    const descriptionTxt = 'bli bli';
    const review: Review = {
      title: titleTxt,
      description: descriptionTxt,
      created: 12345,
      id: 1,
    };
    component.review = review;
    fixture.detectChanges();

    const hostElement = fixture.nativeElement;

    const titleElement: HTMLElement =
      hostElement.querySelector('h5');
    const descriptionElement: HTMLElement =
      hostElement.querySelector('p');
    expect(titleElement.textContent).toEqual(titleTxt);
    expect(descriptionElement.textContent).toEqual(descriptionTxt);
  });
});
