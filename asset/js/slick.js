$('.banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '<button class="chevron-prev"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow: '<button class="chevron-next"><i class="fa-solid fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
});
$('.customer-slick').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    autoplaySpeed: 2000,
    prevArrow: '<button class="chevron-prev"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow: '<button class="chevron-next"><i class="fa-solid fa-angle-right"></i></button>',
    responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        }
      ]
});
$('.product__detail-slick').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  dots: false,
  autoplaySpeed: 3000,
  prevArrow: '<button class="chevron-prev"><i class="fa-solid fa-angle-left"></i></button>',
  nextArrow: '<button class="chevron-next"><i class="fa-solid fa-angle-right"></i></button>',
});

