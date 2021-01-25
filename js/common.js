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

// accordion panel

//자바스크립트 버전 'a태그'만 선택
// function gnbMenuFnc2(element) {
//   // console.log(element);
//   var menuList1 = element.children;
//   var hoverMenu = null;

//   for (var i = 0; i < menuList1.length; i++) {
//     // console.log(menuList1[i].children[0]);
//     menuList1[i].children[0].addEventListener('mouseover', gnbMenuHandler1);
//     menuList1[i].children[0].addEventListener('click', gnbMenuHandler2);
//   }

//   // pc or mobile에서 서브메뉴 클릭 시 서브메뉴가 펼쳐지는 효과
//   function gnbMenuHandler1() {
//     // console.log(document.querySelector('html').className);
//     if (document.querySelector('accordion-content').className == 'pc') {
//       // console.log(this);
//       if (hoverMenu != null) hoverMenu.classList.remove('on');
//       this.classList.add('on');
//       hoverMenu = this;
//     }
//   }

//   element.addEventListener('mouseleave', function () {
//     if (hoverMenu != null) hoverMenu.classList.remove('on');
//     hoverMenu = null;
//   });
// }
// window.addEventListener('load', function () {
//   gnbMenuFnc2(document.querySelector('#gnb'));
// });

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

// mobile, submenu dropdown
function openMobileMenu(element) {
  element.classList.add('on');
  return false;
}
function closeMobileMenu() {
  document.querySelector('.mobile-btn-gnb-open').classList.remove('on');
  return false;
}
