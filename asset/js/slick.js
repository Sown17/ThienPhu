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
    dots: false,
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
$('.product__detail-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  infinite: true,
  asNavFor: '.product__detail-nav',
  prevArrow: '<button class="chevron-prev"><i class="fa-solid fa-angle-left"></i></button>',
  nextArrow: '<button class="chevron-next"><i class="fa-solid fa-angle-right"></i></button>',
});
$('.product__detail-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.product__detail-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
});

