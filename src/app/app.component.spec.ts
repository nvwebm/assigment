import { EventEmitter } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DateSortPipe } from './date-sort.pipe';
import NewReview from './interfaces/newReview.interface';
import Review from './interfaces/review.interface';
import { ReviewsService } from './reviews.service';

// let reviewServiceStub: Partial<ReviewsService> = {
//   reviews: [],
//   reviewsListHasChanged: new EventEmitter<void>(),
//   getReviewsList: function () {
//     return this.reviews;
//   },
//   emitReviewListChange: function () {
//     this.reviewsListHasChanged.emit();
//   },
//   addNewReview: function(newReview: NewReview) {
//     const id = Math.random();
//     const created = new Date().getTime();
//     this.reviews.push({ ...newReview, id, created});
//     this.emitReviewListChange();
//   },
// };

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, DateSortPipe],
      imports: [FormsModule],
   //   providers: [{ provide: ReviewsService, useValue: reviewServiceStub }],
    }).compileComponents();
  });
  // Component creation test
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  // Component properties initialization test

  it(`reviewsLists Should be empty`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.reviewsList.length).toEqual(0);
  });

  it(`sortASC should be true`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.sortASC).toEqual(true);
  });

  // getters Test

  it(`getOrderValue should return 'ASC' when getting true`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.getOrderValue(true)).toEqual('ASC');
  });

  it(`getOrderValue should return 'DESC' when getting false`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.getOrderValue(false)).toEqual('DESC');
  });

  it(`String should contain DESC when sortASC is true`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.getOrderOperationString()).toContain('DESC');
  });

  it(`String should contain ASC when sortASC is false`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.sortASC = false;
    expect(app.getOrderOperationString()).toContain('ASC');
  });

  // Methods Test

  it(`sortASC propery should be false when first calling onSortByTimeButtonClicked`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.onSortByTimeButtonClicked();
    expect(app.sortASC).toEqual(false);
  });

  it(`sortASC propery should be true when calling twice to onSortByTimeButtonClicked`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.onSortByTimeButtonClicked();
    app.onSortByTimeButtonClicked();
    expect(app.sortASC).toEqual(true);
  });

  // it(`Testing when adding new review to service to see if it change on component`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   const reviewServiceStubInstance =  fixture.debugElement.injector.get(ReviewsService);
  //   const title = 'Hello World';
  //   const description = 'Hi World';
  //   reviewServiceStubInstance.addNewReview( { title, description});
  //   expect(app.sortASC).toEqual(true);
  // });
});
