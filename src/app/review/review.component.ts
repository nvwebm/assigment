import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Review from '../interfaces/review.interface';
import { ReviewsService } from '../reviews.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  constructor(private reviewService: ReviewsService) { }
  @Input('review') review: Review;


  ngOnInit(): void {
  }

  onDeleteButtonClicked(): void {
    this.reviewService.deleteReview(this.review);
  }

}
