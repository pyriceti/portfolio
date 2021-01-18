/**
 1.  MENU
 2.  EXPERIENCE SLIDER (Owl Carousel)
 3.  EDUCATION SLIDER (Owl Carousel)
 4.  PORTFOLIO SLIDER
 5.  COUNTER
 6.  TESTIMONIAL SLIDER (Owl Carousel)
 7.  MENU SMOOTH SCROLLING
 8.  PRELOADER
 9.  CALL TO ABOUT
 10. BOTTOM TO UP
 11. PARALLAX HEADER
 12. HIRE ME SCROLL
 13. CONTACT FORM
 **/

jQuery(function ($) {
  M.AutoInit();

  /* ----------------------------------------------------------- */
  /*  1. MENU
  /* ----------------------------------------------------------- */

  $(".sidenav").sidenav();

  const elems = document.querySelectorAll(".dropdown-trigger[data-target='resumeDropdown'],.dropdown-trigger[data-target='portfolioDropdown']");
  M.Dropdown.init(elems, {
    coverTrigger:   false,
    hover:          true,
    constrainWidth: false,
  });


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

  const $portfolioList = $('#portfolioList');
  if ($portfolioList.length) {
    mixitup($portfolioList[0], {
      animation: {
        duration:   500,
        nudge:      true,
        reverseOut: false,
        effects:    "fade scale(0.5) translateZ(-100px)",
      },
    });
  }

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
  let scrollItems   = menuItems.map(function () {
    const item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function (e) {
    e.preventDefault();

    const href = $(this).attr("href");

    // Detect if 404
    if ($('#home').hasClass('err404')) {
      if (href !== '#portfolio') {
        window.location.replace(`/${href}`);
      }
      return;
    }

    if (href === '#portfolio') {
      const target = $(this).attr("data-anchor");
      $(`#portfolio .controls button.filter:nth-child(${target})`).trigger('click');
    }

    const offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 15;
    $('html, body').stop().animate({
      scrollTop: offsetTop,
    }, 900);
  });

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

  // Handle if navigating from outside
  const anchor = window.location.hash;
  if (anchor.startsWith('#')) {
    if (anchor === '#portfolio') {
      let target = window.location.search.split('?a=')[1];
      switch (target) {
        case 'all':
          target = '1';
          break;
        case 'games':
          target = '2';
          break;
        case 'web':
          target = '3';
          break;
        case 'other':
          target = '4';
          break;
        default:
          target = '1';
      }
      $(`#portfolio .controls button.filter:nth-child(${target})`).trigger('click');
    }

    const offsetTop = anchor === "#" ? 0 : $(anchor).offset().top - topMenuHeight + 15;
    jQuery('html, body').stop().animate({
      scrollTop: offsetTop,
    }, 900);
  }

  /* ----------------------------------------------------------- */

  /*  8. PRELOADER
  /* ----------------------------------------------------------- */

  function removePreloader() { // makes sure the whole site is loaded
    $('.progress').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(100).css({ 'overflow': 'visible' });
  }

  $(window).on('load', removePreloader);
  // Fallback after 2s (doc should be ready by now)
  setTimeout(removePreloader, 2000);

  /* ----------------------------------------------------------- */
  /* 9. CALL TO ABOUT
  /* ----------------------------------------------------------- */

  $(".call-to-about").on('click', function () {
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
  $upBtn.on('click', () => {
    if ($upBtn[0].classList.contains('hidden'))
      return;

    $('html, body').animate({
        scrollTop: $("#header").offset().top,
      },
      'slow', function() {
        // On done
        $upBtn.blur();
      });
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

  // $('.parallax').parallax();

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

  /* ----------------------------------------------------------- */
  /* 13. CONTACT FORM
  /* ----------------------------------------------------------- */

  const contactFields = ['name', 'email', 'subject', 'message'];

  /**
   *
   * @param string {string}
   * @return {string}
   */
  function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  contactFields.forEach(f => {
    $(`#contact${capFirst(f)}`).blur(function () {
      $(this).addClass('touched');
    });
  });

  $(".submit-btn").click(function (e) {
    contactFields.forEach(f => {
      $(`#contact${capFirst(f)}`).each(function () {
        $(this).addClass('touched');
      });
    });
  });

  $("#contactForm").submit(function (e) {
    e.preventDefault();

    const posting = $.post('send-message', contactFields.reduce((message, fieldName) => {
      message[fieldName] = $(`#contact${capFirst(fieldName)}`).val();
      return message;
    }, {}));

    posting.done(function () {
      toastr.success('Votre message a bien été envoyé ! :)');
    });
  });

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }

  $("#age").text(getAge("1995/12/15"));

  $("#year").text(new Date().getFullYear().toString());

});
