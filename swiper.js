
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 4500,
    },
     speed: 700,
    slidesPerView: 1,
    navigation: {
        nextEl: '#slide-prev1',
        prevEl: '#slide-next1',
    },
    on: {
      init: () => setTimeout(() => new WOW().init(), 500),
      slideChangeTransitionStart: function() {
        const activeSlide = this.slides[this.activeIndex];
        ['.slide-title', '.slide-subtitle'].forEach(selector => {
          const el = activeSlide.querySelector(selector);
          if (el) {
            el.classList.remove('animate__animated', 'animate__fadeInLeft');
            void el.offsetWidth;
            el.classList.add('animate__animated', 'animate__fadeInLeft',);
            el.style.animationDelay = el.getAttribute('data-wow-delay');
          }
        });
      }
    }
});

const swiper2 = new Swiper('.swiper2', {
  loop: true,
autoplay:{
  delay:"3000"
}  ,

breakpoints: {
  200: {
    slidesPerView: 2, 
    spaceBetween: 15,
  },
  530: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  760: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1050: {
    slidesPerView: 4,
    spaceBetween: 35,
  },
},

pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

});
const swiper3 = new Swiper('.swiper3', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 2500,
    },
     speed: 400,
    slidesPerView: 1,
    spaceBetween: 0,
    // breakpoints: {
    //   100: {
    //     slidesPerView: 1,
    //     spaceBetween: 10
    //   },
    //   580: {
    //     slidesPerView: 2,
    //     spaceBetween: 30
    //   },
    //  860: {
    //     slidesPerView: 2,
    //     spaceBetween: 30
    //   }
    // },
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // navigation: {
    //     nextEl: '#slide-prev3',
    //     prevEl: '#slide-next3',
    // },

    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});

const swiper4 = new Swiper('.swiper4', {
  // Optional parameters
  loop: true,
  autoplay: {
      delay: 2500,
  },
   speed: 400,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    570: {
      slidesPerView: 2,
      spaceBetween: 30
    },
   930: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  // pagination: {
  //     el: '.swiper-pagination',
  // },
  navigation: {
      nextEl: '#slide-prev4',
      prevEl: '#slide-next4',
  },
  // scrollbar: {
  //     el: '.swiper-scrollbar',
  // },
});