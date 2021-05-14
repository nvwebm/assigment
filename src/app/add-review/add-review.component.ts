import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import NewReview from '../interfaces/newReview.interface';
import { ReviewsService } from '../reviews.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss'],
})
export class AddReviewComponent implements OnInit {
  currentlyAdding: boolean;
  review: NewReview;

  constructor(private reviewService: ReviewsService) {}

  ngOnInit(): void {
    this.initComponent();
  }
  initComponent() {
    this.cancelReviewAdding();
    this.initForm();
  }
  initForm(): void {
    this.review = {
      title: '',
      description: '',
    };
  }
  onAddReviewClicked(): void {
    this.currentlyAdding = true;
  }
  onCancelReviewClicked(): void {
    this.cancelReviewAdding();
  }

  cancelReviewAdding(): void {
    this.currentlyAdding = false;
  }

  showFieldBorderWarning(field: NgModel): boolean {
    if (!field.dirty) {
      return false;
    }
    if (!field.invalid) {
      return false;
    }
    return true;
  }

  canSubmitAddingForm(form: NgForm): boolean {
    if (form.invalid) {
      return true;
    }
    return false;
  }

  onFormSubmitted(): void {
    this.reviewService.addNewReview(this.review);
    this.initForm();
  }
}
