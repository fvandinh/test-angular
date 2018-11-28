import { Component, OnInit } from '@angular/core';
import { ratings } from './mock/mock-ratings';
import { Rating } from './class/rating';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ratings = ratings;
  title = 'test-selency';
  sorted = true;
  iconSort = 'unfold_more';
  average: number;
  count: number;
  selectedRating: Rating;
  newRating = new Rating();

  ngOnInit() {
    this.average = 0.0;
    this.count = 0;
    this.ratings.forEach((rating) => {
      this.average = this.average + rating.score;
      this.count = this.count + 1;
    });
    this.average = this.average / this.count;
  }

  onSelect(rating: Rating): void {
    this.selectedRating = rating;
  }

  onSortList() {
    if (this.sorted === true) {
      this.iconSort = 'expand_more';
      this.ratings.sort((ratingA, ratingB): number => {
        if (ratingA.score > ratingB.score) {
          return 1;
        }
        if (ratingA.score < ratingB.score) {
          return -1;
        }
        return 0;
      });
      this.sorted = false;
    } else {
      this.iconSort = 'expand_less';
      this.ratings.sort((ratingA, ratingB): number => {
        if (ratingA.score < ratingB.score) {
          return 1;
        }
        if (ratingA.score > ratingB.score) {
          return -1;
        }
        return 0;
      });
      this.sorted = true;
    }
    return this.ratings;
  }

  onSubmit() { }

  createRating() {
    this.ratings.push(this.newRating);
    this.newRating = new Rating();
  }

}
