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