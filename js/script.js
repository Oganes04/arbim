//========================== СТИЛИЗАЦИЯ CHECKBOX ========================

$(".check-label").on("click", function () {
    let isChecked = $(this).find("input").prop("checked");
    if (isChecked) {
        $(this).find(".fakecheck").addClass("checked");
    } else {
        $(this).find(".fakecheck").removeClass("checked");
    }
});

//=================== Маска номера телефона ============

//  $('input[type="tel"]').inputmask({
//   "mask": "+7 (999) 999 - 99 - 99",
//   "placeholder": "+7 (   )     -    -   ",
//   "showMaskOnHover": false,
//   "showMaskOnFocus": true
// });


//========================== ФУНКЦИЛГАЛ FAQ ========================

$(".faq__item").on("click", function () {
    const $content = $(this).find('.faq__item-answer');
    const $header = $(this).find('.faq__item-question');
    
    if ($header.hasClass('open')) {
        $content.slideUp();
        $header.removeClass('open');
    } else {
        $(".faq__item").find('.faq__item-answer').slideUp();
        $(".faq__item").find('.faq__item-question').removeClass('open');

        $content.slideDown();
        $header.addClass('open');
    }
});


//========================== Функционал бургер меню ====================

$("#burger_menu").click(function() {
  $(this).toggleClass('open');
  $(".header__adaptive").toggleClass("open");
  $(".header__adaptive").slideToggle(300);
  $('html').toggleClass('hidden');
});

$(document).on('click', '.header__adaptive nav ul li', function(e) {
  $("#burger_menu").removeClass('open');
  $(".header__adaptive").slideToggle(300);
  $('html').removeClass('hidden');
});


//========================== ВИДЕО ОТЗЫВОВ ====================

$(document).on('click', '.reviews__item-video .play-button', function(e) {
    const videoLink = $(this).closest('.reviews__item-video').data('video-link');
    const videoContainer = $(this).closest('.reviews__item-video');
    
    // Добавляем видео в конец контейнера
    videoContainer.append(`
        <video controls autoplay>
            <source src="${videoLink}" type="video/mp4">
        </video>
    `);
    
    // Скрываем кнопку play (если нужно)
    $(this).hide(); 
});



//========================== Функционал модальных окон ====================

function openPopup(popup) {

  $('.popup').fadeOut();
  $('.overlay').fadeIn();
  $('html').css('overflow', 'hidden');
  popup.fadeIn();
}

function closePopup(closeBtn) {
  $('.overlay').fadeOut();
  closeBtn.closest('.popup').fadeOut();
  $('html').css('overflow-y', 'auto');
}

$(document).ready(function() {
  $(document).mouseup(function(e) {
    var container = $('.popup:visible'); // Проверяем только видимые попапы
    var popupOpenButtons = $('[data-popup]'); // Все кнопки открытия попапов
    
    // Если попап видим И клик был не по нему И не по кнопке открытия
    if (container.length && 
        !container.is(e.target) && 
        container.has(e.target).length === 0 &&
        !popupOpenButtons.is(e.target) && 
        popupOpenButtons.has(e.target).length === 0) {
      
      container.fadeOut();
      $('.overlay').fadeOut();
      $('html').css('overflow-y', 'auto');
    }
  });


  $(document).on('keydown', function(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      $('.popup').fadeOut();
      $('.overlay').fadeOut();
      $('html').css('overflow-y', 'auto');
    }
  });
});


$(document).on('click', '.popup-close', function(e) {
  closePopup($(this));
});

$(document).on('click', '.popup-get-offer-btn', function(e) {
  openPopup($('.popup-get-offer'));
});

$(document).on('click', '.popup-calculator-btn', function(e) {
  openPopup($('.popup-calculator'));
});

$(document).on('click', '.popup-cases-btn', function(e) {
  openPopup($('.popup-cases'));
});

$(document).on('click', '.popup-lead-magnet-btn', function(e) {
  openPopup($('.popup-lead-magnet'));
});

$(document).on('submit', 'form', function(e) {
  e.preventDefault();
});

$(document).on('click', '.submit-button', function(e) {
  openPopup($('.popup-thanks'));
});


