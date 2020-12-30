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
