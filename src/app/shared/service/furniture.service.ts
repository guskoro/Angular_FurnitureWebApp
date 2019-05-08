import { Injectable } from '@angular/core';
import { Furniture } from '../model/furniture.model';
import { Http, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/Rx';
@Injectable()
export class FurnitureService {
  private furnitureList: Furniture[] = [];
  constructor(private http: Http) {}
  loadFurniture(cat_id: string) {
    return this.http.get('/api/category/' + cat_id + '/furniture').pipe(
      map((respone: Response) => {
        let data = respone.json();
        for (let elem of data) {
          elem.images = elem.images.split(',');
        }
        this.furnitureList = data;
        return data;
      }),
      catchError(error => error)
    );
  }
  getAllFurniture() {
    return this.furnitureList.slice();
  }
  getFurniture(it_id) {
    const result = this.furnitureList.find(elem => {
      return elem.it_id == it_id;
    });
    return result;
  }
}
