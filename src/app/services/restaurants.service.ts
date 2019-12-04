import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  private entityId = 302;
  private entityType ='city';
  httpOptions;

  constructor(private httpClient: HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/xml',
        'user-key': 'c4ea2777466dd203570a2fd283045c97'
      })
    };
  }

  getRestaurants() : Observable<any> {
    return this.httpClient.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${this.entityId}&entity_type=${this.entityType}`, this.httpOptions);
  }

  // private getCities(){
  //   return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch`, this.httpOptions);
  // }

}
