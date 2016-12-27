// Навигация по слайдам
$(document).ready(function () {
    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['intro', 'services', 'projects', 'clients', 'partners', 'contacts'],
    });
});

// Открытие попапов
$(function () {
    var btn = $('.popup_open');
    btn.on('click', function () {
        var popup = $('body').find('.popup'),
            popupId,
            btnPopupId = $(this).data('popup-id');
        for (var i = 0; i < popup.length; i++) {
            popupId = $(popup[i]).data('id');
            if ($(popup[i]).hasClass('active')) {
                $(popup[i]).removeClass('active');
            }
            if (btnPopupId == popupId) {
                $(popup[i]).addClass('active');
            }
        }
    });

// Закрытие попапов
    $('body').find('.popup_close').on('click', function () {
        $('body').find('.popup').removeClass('active')
    });
});

// Переключатель в попапе
$("body").find(".switch").on("click", function () {
    var a = $(this).find(".switch__item"),
        b = $(this).parent().find(".switch-title_left"),
        c = $(this).parent().find(".switch-title_right"),
        d =
            $(this).parent().siblings(".blocks").find(".popup-block");
    a.toggleClass("switch__item_right"), b.toggleClass("switch-title_disable"), c.toggleClass("switch-title_disable"), d.toggleClass("popup-block_hidden")
}),
$("body").find(".switch-title").on("click", function () {
    var a = $(this),
        b = a.siblings(".switch-title"),
        c = $(this).siblings(".switch").find(".switch__item"),
        d = $(this).parent().siblings(".blocks").find(".popup-block");
    a.hasClass("switch-title_disable") && (a.toggleClass("switch-title_disable"), b.toggleClass("switch-title_disable"), c.toggleClass("switch__item_right"), d.toggleClass("popup-block_hidden"))
});
