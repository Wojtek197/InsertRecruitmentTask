import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ICategory } from 'src/model/category.model';
import { IOffer } from 'src/model/offer.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly ApiUrl = "http://127.0.0.1:8000/"

  constructor(
    private http: HttpClient
  ) { }

  getCategory(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.ApiUrl + 'category/');
  }

  addCategory(item: any) {
    return this.http.post(this.ApiUrl + 'category/', item);
  }

  updateCategory(item: any) {
    return this.http.put(this.ApiUrl + 'category/', item);
  }

  deleteCategory (id: number) {
    return this.http.delete(this.ApiUrl + 'category/'+id)
  }

  getOffers(): Observable<IOffer[]> {
    return this.http.get<IOffer[]>(this.ApiUrl + 'offers/');
  }

  addOffer(item: any) {
    return this.http.post(this.ApiUrl + 'offers/', item);
  }

  updateOffer(item: any) {
    return this.http.put(this.ApiUrl + 'offers/', item);
  }

  deleteOffer(id: number) {
    return this.http.delete(this.ApiUrl + 'offers/'+id)
  }
}
