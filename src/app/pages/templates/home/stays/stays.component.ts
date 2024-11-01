import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-stays',
  templateUrl: './stays.component.html',
  styleUrls: ['./stays.component.css']
})
export class StaysComponent implements OnInit {


  seeMore = true;
  isMobileView: boolean = false;

  listCards = [
    {
      title: 'Villa selene',
      image: 'assets/images/png/losAngeles.png'
    },
    {
      title: 'Los angeles',
      image: 'assets/images/png/losAngeles.png'
    },

    {
      title: 'Atlantico',
      image: 'assets/images/png/losAngeles.png'
    },
    {
      title: 'Soledad',
      image: 'assets/images/png/losAngeles.png'
    },
    {
      title: 'Villa selene',
      image: 'assets/images/png/losAngeles.png'
    },
    {
      title: 'Los angeles',
      image: 'assets/images/png/losAngeles.png'
    },

    {
      title: 'Atlantico',
      image: 'assets/images/png/losAngeles.png'
    },
    {
      title: 'Soledad',
      image: 'assets/images/png/losAngeles.png'
    },
    {
      title: 'Soledad',
      image: 'assets/images/png/losAngeles.png'
    },
  ]

  visibleCards = this.listCards.slice(0, 8);
  textSeeMore = "See More";

  ngOnInit(): void {
    this.checkScreenSize();
  }


  checkScreenSize() {
    this.isMobileView = window.innerWidth <= 800;
  }

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

}
