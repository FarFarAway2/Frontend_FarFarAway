import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TravelOfferModel } from '../models/travel-offer-model.model';
import { Observable } from 'rxjs';

const URL = 'https://api-farfaraway-back-production.up.railway.app';
@Injectable({
  providedIn: 'root'
})
export class TravelOfferService {
  private travelOffer!: TravelOfferModel;

  constructor(private httpClient : HttpClient) { }

  getTravelOffers(): Observable<TravelOfferModel[]> {
    return this.httpClient.get<TravelOfferModel[]>(URL + '/traveloffers');
  }

  getTravelOffersID(id: number): Observable<TravelOfferModel> {
    return this.httpClient.get<TravelOfferModel>(URL + '/traveloffers/' + id);
  }
}
