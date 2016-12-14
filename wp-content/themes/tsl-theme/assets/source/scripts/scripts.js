$(document).ready(function() {
	// start
	fullscreen();
	mapSize();
	initGallery();
	goGallery(0, 0);
	initServiceSlider();
	initMap();
	stickyFooter(); // Прижимаем подвал к низу экрана
	autoCloseFilter();
	sliderActiv();
	setting();
	setSlideTitle();
	styleMenu();
	if ($('.cart').length) {
		cart();
	};

	$('.loader').addClass('loader--hidden');

	$('.blocks')
		.on('mouseenter', '.block', function() {
			$(this).find('.block__popup').slideDown();
		})
		.on('mouseleave', '.block', function() {
			$(this).find('.block__popup').fadeOut();
		});

	$('.product__img, .product__link--increase').fancybox();

	// Выравнивание контента
	$('.catalog__in').teslalign({
		children: '.catalog__item',
		items: 4 
	});

	$('.menu__item').on('click', function() {
		styleMenu();
	});

	$('body').on('click', '.hide', function() {
		return false;
	});

	$('.scrolling').scroolly([
      {
        to: 'doc-top + 100el = vp-top',
        direction: 1,
        css: {
          '-transition': 'none',
          position: 'relative',
          top: '',
          width: '100%'
        },
    	removeClass: 'fix',
    	onCheckIn: function($element, rule){
    		cheeckMenu()
    	},
      },
      {
        direction: 1,
        from: 'doc-top + 100el = vp-top',
        css: {
          '-transition': 'none',
          position: 'fixed',
          top: '0px',
          width: '100%'
        },
        addClass: 'fix',
        onCheckIn: function($element, rule){
    		cheeckMenu()
    	},
      },
      {
        to: 'doc-top + 100el = vp-top',
        direction: -1,
        css: {
          '-transition': 'none',
          position: 'relative',
          top: '',
          width: '100%'
        },
        removeClass: 'fix',
        onCheckIn: function($element, rule){
    		cheeckMenu()
    	},
      },
      {
        direction: -1,
        from: 'doc-top + 100el = vp-top',
        css: {
          '-transition': 'none',
          position: 'fixed',
          top: '0px',
          width: '100%'
        },
        addClass: 'fix',
        onCheckIn: function($element, rule){
    		cheeckMenu()
    	},
      }
    ], $('.catalog'));

	if ( !($('body').hasClass('goslider')) ) {
		$('.menu').onePageNav({
			currentClass: 'menu__item--current',
			changeHash: true,
			scrollThreshold: 0.1,
		});
	};


	$('select').styler({
		onSelectOpened: function() {
			$(this).find('.jq-selectbox__dropdown').jScrollPane({
				verticalGutter  : 0,
			});
		}
	});

	$('.b_link').on('click', function() {
		var $this = $(this),
			index = $this.index() + 1,
			$pin = $this.parents('.caroufredsel_wrapper').siblings('.services-screen__nav').find('a');
		$pin.eq(index).trigger('click');
	});


	$('input[type="tel"]').inputmask({
		mask: '+7 (999) 999-99-99',
		placeholder: ' ',
		showMaskOnHover: false
	});

	$('body').find('.roll').on('click', function() {
		var $btn = $(this);
		openFilter($btn);
	});

	$('body').on('scroll', function() {
		autoCloseFilter();
	});


		$('.count').on('click', '.purchase__control--minus', function() {
		var $input = $(this).siblings('.purchase__quantity').find('input'),
			val = parseFloat($input.val()) - 1;
		if(val > 0) $input.val(val);
	}).on('click', '.purchase__control--plus', function() {
		var $input = $(this).siblings('.purchase__quantity').find('input'),
			val = parseFloat($input.val()) + 1;
		if(val > 999) {
			$input.val(999);
		} else {
			$input.val(val);
		}
	});
	$('.purchase__quantity').find('input').on('keyup keypress keydown change', function() {
		if (this.value.match(/[^0-9]/g)) {
			this.value = this.value.replace(/[^0-9]/g, '');
		}
	}).on('change', function() {
		var $this = $(this),
			val = parseFloat($this.val());
		if(val > 999) $this.val(999);
	});


	$('body').find('purchase__control')


	$('body').find('.open-cart').on('click', function() {
		var $check = 0;
		SimpleBasket.getData(function(data){
			$check = $(data.items).size();
			if ($check == 0) {
				return false;
			} else {
				$('body').find('.cart').addClass('cart--open');
				$('body').find('.fill').addClass('open');
				$('body').css({overflow : 'hidden'});
			}
		});
		
	});

	$('body').find('.close-cart').on('click', function() {
		$('body').find('.cart').removeClass('cart--open');
		$('body').find('.fill').removeClass('open');
		$('body').css({overflow : 'visible'});
	});

	$('body').find('.open-popup').on('click', function() {
		if (!$(this).hasClass('hide')) {
			$('body').find('.popup').addClass('popup--open');
			$('body').css({overflow : 'hidden'});
		};
	});

	$('body').find('.open-popup2').on('click', function() {
		$('body').find('.popup2').addClass('popup--open');
		$('body').css({overflow : 'hidden'});
	});

	$('body').find('.close-popup').on('click', function() {
		$('body').find('.popup').removeClass('popup--open');
		if ( !($('.screen').length) || ($('body').hasClass('noslider')) ) {
			$('body').css({'overflow-y' : 'visible'});
		}
	});

	if ($('body.goslider').find('.screen').length) {
		$('body.goslider').on('mousewheel', function(event, delta, deltaX, deltaY) {
			if( ! $(this).hasClass('body--scrolling') ) {
				scrollMainSlider(event, delta, deltaX, deltaY);
			} 
		});
	} else {
		$('body').on('mousewheel', function() {
			styleMenu();
		});
	}

	$('body').find('.switch').on('click', function() {
		var $switcher = $(this).find('.switch__item'),
			$titleLeft = $(this).parent().find('.switch-title--left'),
			$titleRight = $(this).parent().find('.switch-title--right'),
			$forms = $(this).parent().siblings('.blocks').find('.popup-block');
		$switcher.toggleClass('switch__item--right');
		$titleLeft.toggleClass('switch-title--disable');
		$titleRight.toggleClass('switch-title--disable');
		$forms.toggleClass('popup-block--hidden');
	});

	$('body').find('.switch-title').on('click', function() {
		var $this = $(this),
			$secondTitle = $this.siblings('.switch-title'),
			$switcher = $(this).siblings('.switch').find('.switch__item'),
			$forms = $(this).parent().siblings('.blocks').find('.popup-block');
		if ($this.hasClass('switch-title--disable')) {
			$this.toggleClass('switch-title--disable');
			$secondTitle.toggleClass('switch-title--disable');
			$switcher.toggleClass('switch__item--right');
			$forms.toggleClass('popup-block--hidden');
		}
	});



	$('.slider__nav--prev').on('click', function() {
		prevGallery($(this).parents('section').find('.slider'));
	});
	$('.slider__nav--next').on('click', function() {
		nextGallery($(this).parents('section').find('.slider'));
	});

  $('.clients .screen_nav__pin').on('click', function() {
    var index = $(this).index(),
    $slider = $(this).parents('section').find('.slider');
    goGallery(index, $slider, 500);
  })



$('.navigation').on('click', '.navigation__pin', function() {
  var $this = $(this),
	index = $this.index();
	if( ! $('body').hasClass('body--scrolling') ) {
	  mainSlider($this, index);
	}
});

if ( ($('body').hasClass('goslider')) && !($(this).hasClass('menu__item--catalog')) ) {
	$('.menu').on('click', '.menu__item', function() {
	  var index = $(this).index(),
			$pin = $('body').find('.navigation__pin').eq(index);
		if( ! $('body').hasClass('body--scrolling') ) {
			if (index <= 0) {
				$(this) = $('body').find('.navigation__pin').eq(1);
			} else if ($(this).hasClass('menu__item--catalog') ) {
				$(this).find('a').trigger('click');
			}
			$(this).addClass('menu__item--current')
			.siblings().removeClass('menu__item--current');
			mainSlider($pin, index);
		}
		return false;
	});
}

$('.intro-screen__next').on('click', function() {
	var index = 1,
	$this = $('body').find('.navigation__pin').eq(1);
	if( ! $('body').hasClass('body--scrolling') ) {
		mainSlider($this, index);
	}
});




// Операции при ресайзе
window.onresize = function()  {
	fullscreen();
    mapSize();
    stickyFooter(); // Прижимаем подвал к низу экрана
	sliderActiv();
	setting();
    if ($('.cart').length) {
		cart();
	};

	if ($('body.goslider').find('.screen').length) {
		$('body.goslider').on('mousewheel', function(event, delta, deltaX, deltaY) {
			if( ! $(this).hasClass('body--scrolling') ) {
				scrollMainSlider(event, delta, deltaX, deltaY);
			}
		});
	}
}

});

$(document).scroll(function() {
	autoCloseFilter();
});


// Функции
function fullscreen() {
	$('.fullscreen').height( $(window).height() );
	$('.fullscreen').width( $(window).width() );
}

function mapSize() {

  var $map = $('body').find('#map');
  $map.width('auto');
  $map.height('auto');
  var $containerWidth = $map.parent().width(),
    $containerHeight = $map.parent().height();
  $map.width($containerWidth);
  $map.height($containerHeight);
}

function mainSlider($this, index) {
		var $slide = $('body').find('.screen--active'),
			$newslide = $('body').find('.screen').eq(index),
			height = $slide.height(),
			$link = $('body').find('.menu__item');
		$('body').addClass('body--scrolling');
			setTimeout(function() {
				$('body').removeClass('body--scrolling');
			}, 1050);
		$this.addClass('navigation__pin--current')
		.siblings().removeClass('navigation__pin--current');
		// $newslide.css({'top' : ''});
		if (index <= 0) {
			$link.removeClass('menu__item--current');
		} else {
			$link.eq(index).addClass('menu__item--current')
			.siblings().removeClass('menu__item--current');
		}

		if ($slide.index() > $newslide.index()) {
			$newslide.addClass('screen--new-prev');
			setTimeout(function() {
				$slide.css({'top': height});
				$newslide.addClass('screen--move');
			},1);
			$newslide.css({'top': 0});
		} else if ($slide.index() < $newslide.index()) {
			$newslide.addClass('screen--new-next');
			setTimeout(function() {
				$slide.css({'top': -height});
				$newslide.addClass('screen--move');
			},1);
			$newslide.css({'top': 0});
		} else {
			return false;
		}
		setTimeout(function() {
			$newslide.removeClass('screen--new-next')
			.removeClass('screen--new-prev')
			.removeClass('screen--move')
			.addClass('screen--active')
			.siblings().removeClass('screen--active');
			$slide.css({'top' : 0});
		},1040);
		
		initGallery();
		goGallery(0, 0);
		initServiceSlider();
		mapSize();
		google.maps.event.trigger(map,"resize");
		initMap();
		styleMenu();
}

function prevGallery(slider) {
	var index = $(slider).find('.slide.active').index() - 1;
	if(index < 0) {
		goGallery(false);
	} else {
		goGallery(index, slider, 500);
	}
}

function nextGallery(slider) {
	var num = $('.slide').length,
		index = $(slider).find('.slide.active').index() + 1;
	if(index == num) {
		goGallery(false);
	} else {
		goGallery(index, slider, 500);
	}
}

function goGallery(n, sliderCur, a) {
	var $slider = sliderCur;
	if ($slider == 0) {
		$slider = $('.slider')
	}
	$slider.each(function() {
		var $slides = $(this).find('.slider__container'),
			$slide = $slides.find('.slide');
		if(typeof a == 'undefined') a = 300;
		if(n !== false) {
			var slide = n * ($slide.width() + parseFloat($slide.css('margin-right'))),
				$pin = $(this).parents('section').find('.screen_nav--clients').find('.screen_nav__pin');
				$slides.animate({
					'left': -slide
				}, a);
			$slide.eq(n).addClass('active').siblings().removeClass('active');
			$pin.eq(n).addClass('screen_nav__pin--current')
			.siblings().removeClass('screen_nav__pin--current');
			var $prev = $(this).parents('section').find('.slider__nav--prev'),
				$next = $(this).parents('section').find('.slider__nav--next');
			if( n == 0 ) {
				$prev.fadeOut()
			} else {
				$prev.fadeIn();
			}
			if( ($slide.length - 1) == n ) {
				$next.fadeOut()
			} else {
				$next.fadeIn();
			}
		}
	});
}

function initGallery() {
	var $slider = $('.slider');
	$slider.each(function() {
		var $cont = $(this).find('.slider__container'),
			$slide = $cont.find('.slide'),
			num = $slide.length,
			width = num * ($slide.width() + parseFloat($slide.css('margin-right'))),
			$pins = $cont.parents('section').find('.screen_nav'),
			$nav = $cont.parents('section').find('.slider__nav');
		$cont.width(width);
		if ( !$('.screen_nav--clients .screen_nav__pin').length ) {
			for (var i = 1; i <= num; i++) {
				if (i == 1 ) {
					$pins.append('<div class="screen_nav__pin screen_nav__pin--current"></div>');
				} else {
					$pins.append('<div class="screen_nav__pin"></div>');
				};
			};
		};
		if (num <= 1) {
			$nav.css({
				display : 'none'
			});
			$pins.css({
				display : 'none'
			});
		};
	});
}

function initServiceSlider() {
	var $Slider = $('.service-slider');
  if ($Slider.length) {
    $Slider.find('section:first').addClass('current');
    $Slider.carouFredSel({
        circular: false,
        infinite: false,
        responsive: true,
        items: {
            visible: 1
        },
        auto: {
            play: false
        },
        scroll: {
            items: 1
        },
        prev: {
            button: '.service-slider__prev'
        },
        next: {
            button: '.service-slider__next'
        },
        pagination: {
        	container: '.services-screen__nav'
        }
    });
  }
}

function setSlideTitle() {
	var $slide = $('body').find('.service-screen');
	$slide.each(function() {
		var index = $(this).index(),
			$prev = $(this).find('.service-slider__prev'),
			$next = $(this).find('.service-slider__next'),
			$prevTitle = $('body').find('.service-screen').eq(index - 1).find('h2').html(),
			$nextTitle = $('body').find('.service-screen').eq(index + 1).find('h2').html();
		$prev.html($prevTitle);
		if (index == 0) {
			$next.html($nextTitle + '<div class="button__arrow"></div>');
		} else if ($nextTitle == undefined) {
			$next.remove();
		} else {
			$next.html($nextTitle);
		};
		
	})

}

function scrollMainSlider(event, delta, deltaX, deltaY) {
	var $body = $('body'),
		index,
		$this,
		$cheek = $('body').find('.navigation__pin').length - 1;
	if (delta > 0) {
		index = $('body').find('.navigation__pin--current').index() - 1;
		if (index < 0 ) {
			index = 0;
		}
	} else {
		index = $('body').find('.navigation__pin--current').index() + 1;
		if (index > $cheek) {
			index = $cheek;
		}
	}
	$this = $('body').find('.navigation__pin').eq(index),
	mainSlider($this, index);
	return false;
}

function initMap() {
	if ($('#map').length) {
		map = new GMaps({
		  div: '#map',
		  lat: gmlat,
		  lng: gmlng,
		  zoom: 13,
		  height: '100%',
		  scrollwheel: false,
		  zoomControl: false,
		  mapTypeControl: false,
		});
		map.addMarker({
			lat: gmlat,
		  	lng: gmlng,
			title: gmtitle,
			icon: gmicon,
			infoWindow: {
				content: gmcontent
			}
		});
	}
}

// Прижимаем подвал к низу экрана
function stickyFooter() {
	var $footer = $('.footer');
	$footer.siblings('.spacer').remove();
	var contentHeight = $('body').height(),
		windowHeight = $(window).height();
	if(contentHeight < windowHeight) {
		$footer.before('<div class="spacer" style="height: ' + (windowHeight - contentHeight) + 'px;"></div>');
	}
}

function cart() {
	var $height = $('body').find('.cart-in').height(),
		$cart = $('body').find('.cart'),
		$elem = $('body').find('.cart').jScrollPane({
			verticalGutter  : 0,
		});
	$elem;
	if ($height > $(window).height()) {
		$cart.find('.jspVerticalBar').css({display: 'block'});
	} else {
		$cart.find('.jspVerticalBar').css({display: 'none'});
	}
}

var cheekFilter = true;

function openFilter(obj) {
	var $categories = $('.categories__in'),
		$roll = $('.categories__roll'),
		$spacer = $('body').find('.spacer'),
		$spHeight = $spacer.height(),
		$catHeight = $categories.height(),
		footer = setInterval(stickyFooter, 1);
	if ( !($spacer.length) ) {
		$('.footer').before('<div class="spacer"></div>');
		$spacer = $('body').find('.spacer');
	};
	$categories.slideToggle(300, function() {
		clearInterval(footer);
	});
	$roll.toggleClass('categories__roll--close');
	if ($roll.hasClass('categories__roll--close')) {
		$(obj).html('Развернуть фильтр');
		cheekFilter = false;
	} else {
		$(obj).html('Сернуть фильтр');
		cheekFilter = true;
	};
}

function autoCloseFilter() {
	var $btn = $('body').find('.roll');
		scroll = $('body').find('.header-container').height();
	if ($('body').scrollTop() > scroll) {
		if (cheekFilter) {
			openFilter($btn);
		};
	};
}

function sliderActiv() {
	var height = $(window).height(),
		width = $(window).width(),
		$screens = $('body').find('.screen');
	if ( (height <= 850) || (width <= 1200) ) {
		$screens.css({
			display : 'table',
			position : 'relative'
		});
		$('body').find('.fixheight').css({
			height : 900
		})
		$('body').addClass('noslider');
		$('body').removeClass('goslider');
	} else {
		$screens.css({
			'min-height' : 'auto',
			position : 'absolute',
		});
		$('body').removeClass('noslider');
		$('body').addClass('goslider');
	};
}

function setting() {
if ( ($('body').find('.screen').length) && !($('body').hasClass('noslider')) ) {
		$('body').css({overflow: 'hidden'});
		$('body').find('.screen').css({
			display: 'none'
		});
		$('body').find('.screen--active').css({
			position: 'absolute',
		    top: 0,
		    left: 0
		});
		$('.intro-screen__next').css({display: 'inline-block'});
		$('.navigation').css({display: 'block'});
	} else {
		$('body').css({'min-height': '100%'});
		$('html').css({'min-height': '100%'});
		$('body').css({'overflow-y': 'visible'});
		$('.intro-screen__next').css({display: 'none'});
		$('.navigation').css({display: 'none'});
	}
}

function cheeckMenu() {
	var $a = $('.scrolling'),
		ah =$('.scrolling').height(),
		$b = $('.catalog');
	if ($a.hasClass('fix')) {
		$b.css({'padding-top' : ah + 30 });
	} else {
		$b.css({'padding-top' : 30 });
	};
}

function styleMenu() {
	if ($('.header.emerge').length) {
		var index = $('.menu__item--current').index();
			$menu = $('.header.emerge .header__container'),
			$items = $menu.find('.menu__item'),
			$btn = $menu.find('.header__btn'),
			$logo = $menu.find('.header__logo');
			$header = $('.header');
			$nav = $('.navigation');
		if  (index >= 3) {
			$items.addClass('white');
			$btn.addClass('button--white');
			$btn.removeClass('button--blue');
			$btn.removeClass('hide');
			$logo.removeClass('hide');
			$header.addClass('header--main');
			$nav.addClass('navigation--white');
		} else if ( (index == -1 ) || (index == 0) ) {
			$btn.addClass('hide');
			$logo.addClass('hide');
			$header.removeClass('header--main');
		} else {
			$btn.removeClass('hide');
			$logo.removeClass('hide');
			$items.removeClass('white');
			$btn.removeClass('button--white');
			$btn.addClass('button--blue');
			$header.addClass('header--main');
			$nav.removeClass('navigation--white');
		};
	};
}