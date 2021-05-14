import { Component, OnInit } from '@angular/core';
import Review from './interfaces/review.interface';
import { ReviewsService } from './reviews.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    reviewsList: Review[] = [];
    sortASC: boolean = true;
    constructor(private reviewService: ReviewsService) {

    }
    ngOnInit(): void {
        this.connectReviewsService();
    }

    connectReviewsService(): void {
      this.reviewService.reviewsListHasChanged.subscribe(() => {
        this.reviewsList = this.reviewService.getReviewsList();
      })
    }

    onSortByTimeButtonClicked() {
      this.sortASC = !this.sortASC;
    }
    getOrderOperationString(): string {
      return `Sort by time ${this.getOrderValue(!this.sortASC)}`;
    }
    getOrderValue(sortASC: boolean): string {
      if (sortASC) return 'ASC';
      return 'DESC';
    }
}
