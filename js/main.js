// Progress Bar
window.onscroll = function (event) {
  let progressBars = document.getElementsByClassName('progressBar')
  Array.from(progressBars).forEach(bar => {
    let windowTop = window.scrollY;
    let windowBot = windowTop + window.innerHeight;
    let eleTop = bar.offsetTop;
    let eleBot = eleTop + bar.clientHeight;
    if ((eleBot <= windowBot) && (eleTop >= windowTop)) {
      bar.classList.add('active');
    }
  })
}

// NAVBAR ACTIVE
$(".massiveNav .nav-link").on("click", function () {
  $(".massiveNav").find(".active").removeClass("active");
  $(this).addClass("active");
});

// COUNTUP
$(".numbers__counter").countUp();

// OWL CAROUSEL
$(".feedback___carousel").owlCarousel({
  loop: Infinity,
  margin: 0,
  nav: false,
  autoplay: true,
  autoplayTimeout: 3000,
  smartSpeed: 800,
  responsive: {
    0: {
      items: 1
    },
    500: {
      items: 2
    },
    784: {
      items: 3
    },
    1215: {
      items: 1
    }
  }
});

$(".partners___carousel").owlCarousel({
  loop: false,
  margin: 0,
  nav: false,
  autoplay: true,
  autoplayTimeout: 3000,
  smartSpeed: 800,
  responsive: {
    0: {
      items: 1
    },
    500: {
      items: 2
    },
    784: {
      items: 3
    },
    1215: {
      items: 6
    }
  }
});

// ISOTOPE (FILTER)
if (typeof imagesLoaded == "function") {

  $(".showcase__content:not(.showcase__content-masonry)").imagesLoaded().progress(function(){
      $(".showcase__content:not(.showcase__content-masonry)").isotope({
          itemSelector: ".showcase__item",
          layoutMode: "fitRows",
          filter: "*"
      });
  });

  $(".showcase__content-masonry").imagesLoaded().progress(function(){
      $(".showcase__content-masonry").isotope({
          itemSelector: ".showcase__item",
          resizesContainer: false,
          layoutMode: "masonry",
          filter: "*"
      });
  });
}

$(".filter-nav").on("click", "a", function (event) {
  event.preventDefault();
  var $this = $(this);
  $this.parent().addClass("active").siblings().removeClass("active");
  $this.parents(".showcase__filter").next().isotope({filter: $this.data("filter")});
});

// MAGNIFIC POPUP
$(".popup-link").magnificPopup({
  type: "image"
});

$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
  disableOn: 700,
  type: "iframe",
  mainClass: "mfp-fade",
  removalDelay: 160,
  preloader: false,
  fixedContentPos: false
});
