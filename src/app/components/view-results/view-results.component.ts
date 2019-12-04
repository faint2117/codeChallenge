import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';

import { Question} from '../../shared/models/question.model';
import { RestaurantsService } from '../../services/restaurants.service';

@Component({
  selector: 'app-view-results',
  templateUrl: './view-results.component.html',
  styleUrls: ['./view-results.component.scss']
})
export class ViewResultsComponent implements OnInit {
  private questions: Array<Question>;
  private restaurants;

  constructor(private router: Router, private restaurantApi: RestaurantsService) {
    this.questions = this.router.getCurrentNavigation().extras.state as Array<Question>;
  }

  ngOnInit() {
    this.restaurantApi.getRestaurants().subscribe(data => {
      this.restaurants = data.restaurants;
    });

    
  }

}
