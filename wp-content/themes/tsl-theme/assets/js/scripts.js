

// Лоудер
$(document).ready(setTimeout(function() {
    $(".loader").addClass("loader_hidden");
}, 1000));

// Навигация по слайдам
$(document).ready(function() {
    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['intro', 'services', 'projects', 'clients', 'partners', 'contacts'],
    });
});

// Открытие попапов
$(function() {
    var btn = $('.popup_open');
    btn.on('click', function() {
        var popup = $('body').find('.popup'),
            popupId,
            btnPopupId = $(this).data('popup-id');
        for (var i = 0; i < popup.length; i++) {
            popupId = $(popup[i]).data('id');
            if($(popup[i]).hasClass('active')){
                $(popup[i]).removeClass('active');
            }
          if (btnPopupId == popupId) {
              $(popup[i]).addClass('active');
            }
        }
    });

// Закрытие попапов
    $('body').find('.popup_close').on('click', function() {
        $('body').find('.popup').removeClass('active')
    });
});

// Переключатель в форме Связаться
    $('body').find('.switch').on('click', function() {
		var $switcher = $(this).find('.switch__item'),
			$titleLeft = $(this).parent().find('.switch-title_left'),
			$titleRight = $(this).parent().find('.switch-title_right'),
			$forms = $(this).parent().siblings('.blocks').find('.popup-block');
		$switcher.toggleClass('switch__item_right');
		$titleLeft.toggleClass('switch-title_disable');
		$titleRight.toggleClass('switch-title_disable');
		$forms.toggleClass('popup-block_hidden');
	}),
    $('body').find('.switch-title').on('click', function() {
		var $this = $(this),
			$secondTitle = $this.siblings('.switch-title'),
			$switcher = $(this).siblings('.switch').find('.switch__item'),
			$forms = $(this).parent().siblings('.blocks').find('.popup-block');
		if ($this.hasClass('switch-title_disable')) {
			$this.toggleClass('switch-title_disable');
			$secondTitle.toggleClass('switch-title_disable');
			$switcher.toggleClass('switch__item_right');
			$forms.toggleClass('popup-block_hidden');
		}
	});



    //
    //
    // $('select').styler({
    //     onSelectOpened: function() {
    //         $(this).find('.jq-selectbox__dropdown').jScrollPane({
    //             verticalGutter  : 0,
    //         });
    //     }
    // });
    //
    // $('input[type="tel"]').inputmask({
	// 	mask: '+7 (999) 999-99-99',
	// 	placeholder: ' ',
	// 	showMaskOnHover: false
	// });
