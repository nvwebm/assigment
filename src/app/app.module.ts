import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReviewComponent } from './review/review.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { FormsModule } from '@angular/forms';
import { DateSortPipe } from './date-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    AddReviewComponent,
    DateSortPipe 
   ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
