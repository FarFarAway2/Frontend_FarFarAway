import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HotelOfferService } from '../service/hotel-offer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-offer-page',
  templateUrl: './offer-page.component.html',
  styleUrls: ['./offer-page.component.css'],
})
export class OfferPageComponent implements OnInit {
  hotelOffer: any;
  @ViewChild('myModal', { static: true }) myModal: ElementRef;
  @ViewChild('check', { static: true }) check: ElementRef;

  constructor(private route: ActivatedRoute, private hotelOfferService: HotelOfferService, private router: Router
    ) {}

  isHoverEnabled = true;
  i: number = 0;

  name = 'Default';
  price = 0;
  description = 'Default';
  expire_date = 'Default';
  number_people = 0;
  start_date = 'Default';
  id_hotel: any;

  ngOnInit(): void {
    console.log(this.router.url.split('/').pop());
    this.id_hotel = this.router.url.split('/').pop();
    this.hotelOfferService.getHotelOffersID(this.id_hotel).subscribe((offer) => {
      console.log(offer);
      this.hotelOffer = offer;
      this.name = this.hotelOffer.hotel_name;
      this.description = this.hotelOffer.hotel_description;
      this.price = this.hotelOffer.price;
      this.start_date = this.hotelOffer.start_date;
      this.expire_date = this.hotelOffer.expire_date;
    });
  }

  onHover() {
    if (this.isHoverEnabled) {
      const progress = document.querySelector(".progress") as HTMLElement;
      progress.style.backgroundColor = "#770004";
    }
  }

  onLeave() {
    const progress = document.querySelector(".progress") as HTMLElement;
    progress.style.backgroundColor = "#ac0006";
  }

  disableHover() {
    this.isHoverEnabled = false;
  }

  enableHover() {
    this.isHoverEnabled = true;
  }

  //For animate the button like progress bar
  makeProgress() {
    this.disableHover();

    if (this.i < 100) {
      this.i = this.i + 2;
      const progressBar = document.querySelector(".progress-bar") as HTMLElement;
      progressBar.style.width = this.i + "%";
    }

    // Wait for sometime before running this function again
    setTimeout(() => {
      this.makeProgress();
    }, 100);
  }

  //For close the book form modal
  closeModal() {
    const modal = this.myModal.nativeElement;
    setTimeout(() => {
      if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
        const modalBackdrop = document.querySelector('.modal-backdrop');
        if (modalBackdrop) {
          modalBackdrop.remove();
        }
      }
    }, 6000); // Retraso de 6000 milisegundos (6 segundos)
  }
}
