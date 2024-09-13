import { Component, HostListener, OnInit } from '@angular/core';
import { Swiper } from 'swiper';
import { SwiperOptions } from 'swiper/types';
@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {
  ngOnInit(){
  }

  seeMore = true;
  isMobileView: boolean = false;
  swiperInstanceDestinations!: Swiper;


  listCards = [
    {
      title: 'Villa selene',
      image: 'assets/images/png/losAngeles.png'
    },
    {
      title: 'Los angeles',
      image: 'assets/images/png/card2.png'
    },

    {
      title: 'Atlantico',
      image: 'assets/images/png/card3.png'
    },
    {
      title: 'Soledad',
      image: 'assets/images/png/card4.png'
    },
    {
      title: 'Villa selene',
      image: 'assets/images/png/card5.png'
    },
    { 
      title: 'Los angeles',
      image: 'assets/images/png/losAngeles.png'
    },
  ]

  visibleCards = this.listCards.slice(0, 8);
  textSeeMore = "See More";


  seeAll(){
    if(this.seeMore == true){
      this.visibleCards = this.listCards;
      this.textSeeMore = "See less";

      this.seeMore = false;
    }else{
      this.visibleCards =  this.listCards.slice(0, 8);
      this.textSeeMore = "See More";

      this.seeMore = true;
    }
  }

  config: SwiperOptions = {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1025: {
        slidesPerView: 4,
        spaceBetween: 20
      },
    }

  };

  ngAfterViewInit() {
    this.swiperInstanceDestinations = new Swiper('.swiper-container', this.config);
  }

  slideNextFunction() {
    if (this.swiperInstanceDestinations) {
      this.swiperInstanceDestinations.slideNext();
    }
  }

  slidePrevFunction() {
    if (this.swiperInstanceDestinations) {
      this.swiperInstanceDestinations.slidePrev();
    }
  }

}
