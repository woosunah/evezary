function deviceSizeCheck(pcSize) {
  $(window).on('resize', function () {
    var root = $('html');
    var w = $(this).innerWidth();
    root.removeClass('pc mobile');
    if (w >= pcSize) {
      root.addClass('pc');
    } else {
      root.addClass('mobile');
    }
  });
  $(window).resize();
}
//deviceSizeCheck(num);

// fixed header
$(window).on('scroll', function () {
  if ($(this).scrollTop() > 300) {
    $('header').addClass('fixed');
  } else {
    $('header').removeClass('fixed');
  }
});
// gnb menu bar hover, li tag color change
$(window).on('scroll', function () {
  if ($(this).scrollTop() > 300) {
    $('.gnb').addClass('mouseover');
  } else {
    $('.gnb').removeClass('mouseover');
  }
});
// i tag hover, color change
$(window).on('scroll', function () {
  if ($(this).scrollTop() > 300) {
    $('.sns-icon-group').addClass('mouseover');
  } else {
    $('.sns-icon-group').removeClass('mouseover');
  }
});

$(function () {
  $('.main-slide-banner').bxSlider({
    auto: true,
    speed: 1200,
    pause: 3500,
    mode: 'fade',
    autoControls: false,
    pager: true,
  });
});

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
      $('#top-btn').fadeIn();
    } else {
      $('#top-btn').fadeOut();
    }
  });
  $('#top-btn').click(function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // // ios scrollTop  smooth move
  // $('#top-btn').click(function () {
  //   $('html, body').animate({ scrollTop: 0 }, 400);
  //   return false;
  // });
});

$(function () {
  $('.accordion-content').hide();
  $('.accordion-item-heading').click(function () {
    if ($(this).next().css('display') == 'none') {
      $(this).next().slideDown(400);
    } else {
      $(this).next().slideUp(400);
    }
  });
});

let isNaviOpen = false;
function naviOpen() {
  const naviBar = document.querySelector('.main-menu');
  isNaviOpen = !isNaviOpen;
  if (isNaviOpen) {
    naviBar.classList.add('open');
  } else {
    naviBar.classList.remove('open');
  }
}
