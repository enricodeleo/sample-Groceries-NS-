import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Config } from '../config';
import { Grocery } from './grocery';

@Injectable()
export class GroceryListService {
  constructor(private http: Http) {}

  load() {
    let headers = new Headers();
    // headers.append('Authorization', 'Bearer ' + Config.token);

    return this.http.get(Config.apiUrl + 'groceries', {
      headers: headers
    })
    .map(res => res.json())
    .map(data => {
      let groceryList = [];
      data.data.forEach((grocery) => {
        groceryList.push( new Grocery( grocery.id, grocery.name ) );
      });
      return groceryList;
    })
    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}