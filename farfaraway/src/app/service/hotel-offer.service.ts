import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelOfferModel } from '../models/hotel-offer-model.model';

const URL = "https://api-farfaraway-back-production.up.railway.app"
@Injectable({
  providedIn: 'root',
})
export class HotelOfferService {

  constructor(private httpClient: HttpClient) {}

  getHotelOffers(): Observable<HotelOfferModel[]> {
    return this.httpClient.get<HotelOfferModel[]>(URL + '/hoteloffers');
  }
}
