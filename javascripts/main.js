/**
 * Template Name: MU Material
 * Version: 1.0
 * Template Scripts
 * Author: MarkUps
 * Author URI: http://www.markups.io/

 Custom JS

 1. MOBILE MENU
 2. EXPERIENCE SLIDER (Owl Carousel)
 3. EDUCATION SLIDER (Owl Carousel)
 4. PORTFOLIO SLIDER
 5. COUNTER
 6. TESTIMONIAL SLIDER (Owl Carousel)
 7. MENU SMOOTH SCROLLING
 8. PRELOADER
 9. CALL TO ABOUT
 10. BOTTOM TO UP
 11. PARALLAX HEADER
 12. HIRE ME SCROLL
 **/

jQuery(function ($) {
  M.AutoInit();

  /* ----------------------------------------------------------- */
  /*  1. Mobile MENU
  /* ----------------------------------------------------------- */

  $(".sidenav").sidenav();

  /* ----------------------------------------------------------- */
  /*  2. Experience SLider(Owl Carousel)
  /* ----------------------------------------------------------- */

  const owl = $("#owl-carousel");
  owl.owlCarousel({
    items:             4, //4 items above 1024px browser width
    itemsDesktop:      [1024, 3], //3 items between 1024px and 901px
    itemsDesktopSmall: [900, 2], // betweem 900px and 601px
    itemsTablet:       [600, 1], //1 items between 600 and 0
    itemsMobile:       1, // itemsMobile disabled - inherit from itemsTablet option
  });
  // Slide Navigation
  jQuery(".next").click(function () {
    owl.trigger('owl.next');
  });

  jQuery(".prev").click(function () {
    owl.trigger('owl.prev');
  });


  /* ----------------------------------------------------------- */
  /*  3. EDUCATION SLIDER (Owl Carousel)
  /* ----------------------------------------------------------- */

  const owl1 = $("#owl-carousel1");
  owl1.owlCarousel({
    items:             4, //4 items above 1024px browser width
    itemsDesktop:      [1024, 3], //3 items between 1024px and 901px
    itemsDesktopSmall: [900, 2], // betweem 900px and 601px
    itemsTablet:       [600, 1], //1 items between 600 and 0
    itemsMobile:       1, // itemsMobile disabled - inherit from itemsTablet option
  });
  // Slide Navigation
  jQuery(".next1").click(function () {
    owl1.trigger('owl.next');
  });

  jQuery(".prev1").click(function () {
    owl1.trigger('owl.prev');
  });

  /* ----------------------------------------------------------- */
  /*  4. PORTFOLIO SLIDER
  /* ----------------------------------------------------------- */

  jQuery('#portfolio-list').mixItUp();

  /* ----------------------------------------------------------- */
  /*  5. COUNTER
  /* ----------------------------------------------------------- */

  $('.counter').counterUp({
    delay: 10,
    time:  1000,
  });

  /* ----------------------------------------------------------- */
  /*  6. TESTIMONIAL SLIDER (Owl Carousel)
  /* ----------------------------------------------------------- */

  const owl2 = $("#owl-carousel2");
  owl2.owlCarousel({
    items:             2, //4 items above 1024px browser width
    itemsDesktop:      [1024, 2], //3 items between 1024px and 901px
    itemsDesktopSmall: [900, 2], // betweem 900px and 601px
    itemsTablet:       [600, 1], //1 items between 600 and 0
    itemsMobile:       1, // itemsMobile disabled - inherit from itemsTablet option
  });

  // Slide Navigation
  jQuery(".next2").click(function () {
    owl2.trigger('owl.next');
  });

  jQuery(".prev2").click(function () {
    owl2.trigger('owl.prev');
  });


  /* ----------------------------------------------------------- */
  /*  7. MENU SMOOTH SCROLLING
  /* ----------------------------------------------------------- */

  //MENU SCROLLING WITH ACTIVE ITEM SELECTED

  // Cache selectors
  let lastId;
  let topMenu       = $(".menu-scroll");
  let topMenuHeight = topMenu.outerHeight() + 13;
  // All list items
  let menuItems     = topMenu.find("a[href^=\\#]").filter(":not([href=\\#])");
  // Anchors corresponding to menu items
  let scrollItems   = menuItems.map(function() {
    const item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function (e) {
    const href      = $(this).attr("href");
    const offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 15;
    jQuery('html, body').stop().animate({
      scrollTop: offsetTop,
    }, 900);
    e.preventDefault();
  });

  // menuItems.hover(function (e) {
  //   console.log(1);
  //   if (!$(this)[0].classList.contains('dropdown-button')) return;
  //   console.log(2);
  //   $(this).dropdown('open');
  //   console.log($(this));
  // });

  // Bind to scroll
  $(window).scroll(function () {
    // Get container scroll position
    const fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    let cur  = scrollItems.map(function () {
      if ($(this).offset().top < fromTop)
        return this;
    });
    // Get the id of the current element
    cur      = cur[cur.length - 1];
    const id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .parent().removeClass("active")
        .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
  });

  /* ----------------------------------------------------------- */
  /*  8. PRELOADER
  /* ----------------------------------------------------------- */

  $(window).on('load', function () { // makes sure the whole site is loaded
    $('.progress').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(100).css({ 'overflow': 'visible' });
  });

  /* ----------------------------------------------------------- */
  /* 9. CALL TO ABOUT
  /* ----------------------------------------------------------- */

  jQuery(".call-to-about").click(function () {
    jQuery('html,body').animate({
        scrollTop: $("#about").offset().top,
      },
      'slow');
  });

  /* ----------------------------------------------------------- */
  /* 10. BOTTOM TO UP
  /* ----------------------------------------------------------- */

  const $window = $(window);
  const $upBtn  = $(".up-btn");
  $upBtn.click(() => {
    if ($upBtn[0].classList.contains('hidden')) return;
    $('html, body').animate({
        scrollTop: $("#header").offset().top,
      },
      'slow');
  });

  function CalcUpBtn() {
    if ($window.scrollTop() > 200)
      $upBtn.removeClass('hidden');
    else {
      $upBtn.addClass('hidden');
    }
  }

  $(window).scroll(CalcUpBtn);
  CalcUpBtn();

  /* ----------------------------------------------------------- */
  /* 11. PARALLAX HEADER
  /* ----------------------------------------------------------- */

  jQuery('.parallax').parallax();

  /* ----------------------------------------------------------- */
  /* 12. HIRE ME SCROLL
  /* ----------------------------------------------------------- */

  $(".hire-me-btn").on('click', function (e) {
    e.preventDefault();
    jQuery('html,body').animate({
        scrollTop: $("#footer").offset().top,
      },
      'slow');
  });


});
