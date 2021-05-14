import { EventEmitter, Injectable } from '@angular/core';
import NewReview from './interfaces/newReview.interface';
import Review from './interfaces/review.interface';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  reviews: Review[] = [];
  reviewsListHasChanged: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  addNewReview(newReview: NewReview): void {
    const id = Math.random();
    const created = new Date().getTime();
    this.reviews.push({ ...newReview, id, created});
    this.emitReviewListChange();
  }

  deleteReview(review: Review): void {
    const { id } = review;
    this.reviews = this.reviews.filter((reviewItem) => reviewItem.id !== id);
    this.emitReviewListChange();
  }

  emitReviewListChange(): void {
    this.reviewsListHasChanged.emit();
  }

  getReviewsList(): Review[] {
    return this.reviews;
  }
}
