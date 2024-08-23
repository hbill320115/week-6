// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper1 = new Swiper(".swiper1", {
    breakpoints: {
      375: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
    },
    loop: true, 

    spaceBetween: 48,
      pagination: {
        el: '.swiper-pagination-custom',
        type: "fraction",
      },
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
  });
// ===============================================================================
  
  const swiper2 = new Swiper(".swiper2", {
    slidesPerView: 1,
    breakpoints: {
      375: {
        spaceBetween: 24,
      },
      992: {
        spaceBetween: 48,
      },
    },
  pagination: {
    el: '.swiper-pagination-map',
    type: "fraction",
  },
});

//========================================================================

const swiper3 = new Swiper(".swiper3", {
  slidesPerView: 1,
  spaceBetween: 24,
});