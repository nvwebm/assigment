import { Pipe, PipeTransform } from '@angular/core';
import Review from './interfaces/review.interface';

@Pipe({
  name: 'dateSort',
})
export class DateSortPipe implements PipeTransform {
  transform(value: Review[], order: string): Review[] {
    let isLess = -1;
    let isMore = 1;
    if (order === 'DESC') {
      isLess = 1;
      isMore = -1;
    }

    console.log(order);
    const sortFunction = function (reviewA: Review, reviewB: Review): number {
      if (reviewA.created < reviewB.created) {
        return isLess;
      }
      if (reviewA.created > reviewB.created) {
        return isMore;
      }
      return 0;
    };
    value.sort(sortFunction);
    return value;
  }
}
