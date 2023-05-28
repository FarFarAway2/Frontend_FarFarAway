import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { HotelOfferModel } from '../models/hotel-offer-model.model';
import { Filter } from '../models/filter';
import { map, mergeMap } from 'rxjs/operators';

const URL = 'https://api-farfaraway-back-production.up.railway.app';
@Injectable({
  providedIn: 'root',
})
export class HotelOfferService {
  private hotelOffer!: HotelOfferModel;

  constructor(private httpClient: HttpClient) {}

  getHotelOffers(): Observable<HotelOfferModel[]> {
    return this.httpClient.get<HotelOfferModel[]>(URL + '/hoteloffers');
  }

  getHotelOffersID(id: number): Observable<HotelOfferModel> {
    return this.httpClient.get<HotelOfferModel>(URL + '/hoteloffers/' + id);
  }

  getHotelOffersFilterRating(filter: Filter): Observable<HotelOfferModel[]> {
    let ratings: number[] = [];
    if (filter.ratings != undefined) {
      if (filter.ratings.includes(true)) {
        for (let i = 0; i < filter.ratings.length; i++) {
          if (filter.ratings[i]) {
            ratings.push(i + 1);
          }
        }
      } else {
        for (let i = 0; i < filter.ratings.length; i++) {
          ratings.push(i + 1);
        }
      }
    }
    return this.httpClient.get<HotelOfferModel[]>(
      URL + '/hoteloffers/rating/' + ratings
    );
  }

  getHotelOffersFilterPrice(filter: Filter): Observable<HotelOfferModel[]> {
    let prices: number[] = [0, 0];
    if (filter.priceLow != undefined) {
      prices[0] = filter.priceLow;
    }

    if (filter.priceTop != undefined) {
      prices[1] = filter.priceTop;
    }

    return this.httpClient.get<HotelOfferModel[]>(
      URL + '/hoteloffers/price/' + prices
    );
  }

  // getHotelOffersFilterSpecialDates(
  //   filter: Filter
  // ): Observable<HotelOfferModel[]> {
  // }

  getHotelOffersFilterLastOptions(
    filter: Filter
  ): Observable<HotelOfferModel[]> {
    return this.httpClient.get<HotelOfferModel[]>(
      URL + '/hoteloffers/expiredate'
    );
  }

  // getAllFilteredOffers(filter: Filter): Observable<HotelOfferModel[]> {
  //   const offerRatings = this.getHotelOffersFilterRating(filter);
  //   const offerPrices = this.getHotelOffersFilterPrice(filter);
  //   const offerLastOptions = this.getHotelOffersFilterLastOptions(filter);

  //   return forkJoin([offerRatings, offerPrices, offerLastOptions]).pipe(
  //     map(([offerRatings, offerPrices, offerLastOptions]) => [
  //       ...offerRatings,
  //       ...offerPrices,
  //       ...offerLastOptions,
  //     ])
  //   );
  // }
}
