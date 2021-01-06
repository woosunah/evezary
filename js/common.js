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
let accordionContent = document.querySelectorAll('.accordion-item-heading');
let collapseBtn = document.querySelector('.accordion-content');

function closeAll() {
  for (let j = 0; j < accordionContent.length; j++) {
    accordionContent[j].classList.remove('active');
  }

  for (let i = 0; i < accordionContent.length; i++) {
    accordionContent[i].addEventListener('click', function () {
      closeAll();
      this.classList.add('active');
    });
  }
  collapseBtn.addEventListener('click', function () {
    closeAll();
  });
}

//자바스크립트 버전 'a태그'만 선택
function gnbMenuFnc2(element) {
var accordionContent = document.querySelectorAll('.accordion-item-heading');
var collapseBtn = document.querySelector('.accordion-content');

  for (var i = 0; i < accordionContent.length; i++) {
  accordionContent[i].classList.remove('active');
  accordionContent[i].addEventListener('click');


  // pc or mobile에서 서브메뉴 클릭 시 서브메뉴가 펼쳐지는 효과
  function gnbMenuHandler1() {
    // console.log(document.querySelector('html').className);
    if (document.querySelector('.accordion-content')) {
      // console.log(this);
      if (collapseBtn != null) .classList.remove('on');
      this.classList.add('on');
      collapseBtn = this;
    }
  }
  function gnbMenuHandler2() {
    if (document.querySelector('.accordion-item-heading')) {
      this.classList.toggle('on');
      if (this.className.indexOf('on') >= 0) {
        collapseBtn = this;
      } else {
        collapseBtn = null;
      }
    }
  }
  element.addEventListener('mouseleave', function () {
    if (collapseBtn != null) collapseBtn.classList.remove('on');
    collapseBtn = null;
  });
}
window.addEventListener('load', function () {
  gnbMenuFnc2(document.querySelector('.accordion-container'));
})


//자바스크립트 버전 'a태그'만 선택
function gnbMenuFnc2(element) {
  // console.log(element);
  var menuList1 = element.children;
  var hoverMenu = null;

  for (var i = 0; i < menuList1.length; i++) {
    // console.log(menuList1[i].children[0]);
    menuList1[i].children[0].addEventListener('mouseover', gnbMenuHandler1);
    menuList1[i].children[0].addEventListener('click', gnbMenuHandler2);
  }

  // pc or mobile에서 서브메뉴 클릭 시 서브메뉴가 펼쳐지는 효과
  function gnbMenuHandler1() {
    // console.log(document.querySelector('html').className);
    if (document.querySelector('accordion-content').className == 'pc') {
      // console.log(this);
      if (hoverMenu != null) hoverMenu.classList.remove('on');
      this.classList.add('on');
      hoverMenu = this;
    }
  }

  element.addEventListener('mouseleave', function () {
    if (hoverMenu != null) hoverMenu.classList.remove('on');
    hoverMenu = null;
  });
}
window.addEventListener('load', function () {
  gnbMenuFnc2(document.querySelector('#gnb'));
});
