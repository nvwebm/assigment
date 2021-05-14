import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { AddReviewComponent } from './add-review.component';

describe('AddReviewComponent', () => {
  let component: AddReviewComponent;
  let fixture: ComponentFixture<AddReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddReviewComponent],
      imports: [BrowserModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AddReviewComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // Propeties Test
  it('Should initialize currentlyAdding to false', () => {
    expect(component.currentlyAdding).toEqual(false);
  });

  it('Should initialize isFormValid to false', () => {
    expect(component.currentlyAdding).toEqual(false);
  });

  it('Should initialize review to empty NewReview object', () => {
    expect(component.review).toEqual({ title: '', description: '' });
  });

  // Buttons Test

  it('Add review button should set AddReview to true and cancel adding to false', () => {
    const hostElement = fixture.nativeElement;

    const addReviewButton: HTMLButtonElement =
      hostElement.querySelector('.add-button');
    addReviewButton.dispatchEvent(new Event('click'));

    fixture.detectChanges();
    expect(component.currentlyAdding).toEqual(true);

    const cancelReviewAddingButtton: HTMLButtonElement =
      hostElement.querySelector('.reset-button');
    cancelReviewAddingButtton.dispatchEvent(new Event('click'));

    fixture.detectChanges();
    expect(component.currentlyAdding).toEqual(false);
  });
  it('Submit when form empty should do nothing', () => {
    component.onAddReviewClicked();
    fixture.detectChanges();
    const hostElement = fixture.nativeElement;

    const cancelReviewAddingButtton: HTMLButtonElement =
      hostElement.querySelector('.submit-button');
    cancelReviewAddingButtton.dispatchEvent(new Event('click'));

    fixture.detectChanges();
    expect(component.currentlyAdding).toEqual(true);
  });

  it('Submit when form full reset component', () => {
    component.onAddReviewClicked();
    fixture.detectChanges();
    const hostElement = fixture.nativeElement;
    const titleInputElement: HTMLInputElement =
      hostElement.querySelector('.title-input');
    titleInputElement.value = '12345';
    const textAreaElement: HTMLTextAreaElement =
      hostElement.querySelector('.description-input');
    textAreaElement.value = '1234567899';
    titleInputElement.dispatchEvent(new Event('input'));
    textAreaElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const cancelReviewAddingButtton: HTMLButtonElement =
      hostElement.querySelector('.submit-button');
    cancelReviewAddingButtton.dispatchEvent(new Event('click'));

    fixture.detectChanges();
    expect(component.currentlyAdding).toEqual(true);
  });
});
