function TSL_Catalog(startCount, allCount, SimpleBasket){
	this.init();
	this.startCount = startCount;
	this.SB = SimpleBasket;
	this.btn = $('.catalog__in').find('.button');
	this.append = true;
	this.max = allCount;
	this.search = '';
	this.tempMax = allCount;
	this.renderCart();
	SimpleBasket.getHTML();
}
TSL_Catalog.prototype.init = function(){
	var that = this;
	
	jQuery('.itemlist').on('click', '.itemlist__item', function(e){
		that.append = false;
		this.search = '';
		var category = $(this).attr('data-category');
		var count = 0;
		var need = that.startCount;
		var search = this.search;
		that.max = $(this).attr('data-max');
		that.sendData(category, count, need, search);
		that.btn.attr('data-category',category);
		that.btn.attr('data-count',count);
		return false;
	});

	jQuery('.catalog__in').on('click', '.button', function(e){
		that.append = true;
		var category = $(this).attr('data-category');
		var count = $(this).attr('data-count');
		var need = $(this).attr('data-need');
		var search = this.search;
		that.sendData(category, count, need, search);
		return false;
	});

	$('.header__search').find('input').on('keyup', function() {
		that.append = false;
		var category = '';
		var count = 0;
		var need = that.startCount;
		var search = this.value;
		that.max = -1;
		that.sendData(category, count, need, search);
		that.btn.attr('data-category',category);
		that.btn.attr('data-count',count);
		return false;
		
	});

	jQuery('.catalog__in').on('click', '.simple-basket-buy-now', function(e){
		var idProduct = $(this).attr('href').substr(5);
		SimpleBasket.add(idProduct, function() {
			SimpleBasket.getData(function(data){
				that.renderCart(data);
			});
			SimpleBasket.getHTML();
		});
		return false;
	});

	jQuery('.cart__items').on('click', '.purchase__del', function(e){
		var $product = $(this).parents('.purchase'),
			idProduct = $product.attr('data-id');
			$product.slideUp();
		SimpleBasket.del(idProduct, function() {
			SimpleBasket.getData(function(data){
				that.delItem(data);
			});
			SimpleBasket.getHTML();
		});
	});

	$('.cart__items').on('click', '.purchase__control--minus', function() {
		var $input = $(this).siblings('.purchase__quantity').find('input'),
			val = parseFloat($input.val()) - 1,
			idProduct = $(this).parents('.purchase').attr('data-id');
		if(val > 0) $input.val(val);
		SimpleBasket.update(idProduct, val, function() {
			SimpleBasket.getData(function(data){
				that.delItem(data);
			});
		});
	}).on('click', '.purchase__control--plus', function() {
		var $input = $(this).siblings('.purchase__quantity').find('input'),
			val = parseFloat($input.val()) + 1,
			idProduct = $(this).parents('.purchase').attr('data-id');
		if(val > 999) {
			$input.val(999);
		} else {
			$input.val(val);
		}
		SimpleBasket.update(idProduct, val, function() {
			SimpleBasket.getData(function(data){
				that.delItem(data);
			});
		});
	});

	$('.cart__items').on('keyup keypress keydown change', '.purchase__quantity input', function() {
		var idProduct = $(this).parents('.purchase').attr('data-id');
		if (this.value.match(/[^0-9]/g)) {
			this.value = this.value.replace(/[^0-9]/g, '');
		}
		SimpleBasket.update(idProduct, this.value, function() {
			SimpleBasket.getData(function(data){
				that.delItem(data);
			});
		});
	});


	$('.popup-block--info').on('submit', 'form.orderForm', function() {
	var send_data = jQuery(this).serializeArray();
	send_data.push({'name':'action', 'value':'handle'});
	jQuery.ajax({
		type     : "post",
		dataType   : "json",
		url     : myajax.url,
		data     : send_data,
		beforeSend : function(){

		},
		complete  : function(){
			// SimpleBasket.getData(function(data){
			// 	that.renderCart(data);
			// });
			// SimpleBasket.getHTML(function() {
			// 	SimpleBasket.handle();
			// });
		},
		success   : function(response) {
			$('.popup-block--info').html(response);
			$('.popup-block--cart').css({opacity : 0});
			SimpleBasket.getData(function(data){
				that.renderCart(data);
			});
		},
		error : function (request, status, error) {

		}
	}) //ajax//
	return false;
	});

}

TSL_Catalog.prototype.renderPositions = function(data){
	var that = this;
	if (that.append) {
		$('.product-list').append(data);	
	} else {
		$('.product-list').html(data);
	};
}

TSL_Catalog.prototype.sendData = function(category, count, need, search) {
	var that = this;
	var send_data = new Array();
		send_data.push({'name':'action', 'value':'tsl_catalog_action'});
		send_data.push({'name':'category', 'value':category});
		send_data.push({'name':'count', 'value':count});
		send_data.push({'name':'need', 'value':need});
		send_data.push({'name':'search', 'value':search});
	jQuery.ajax({
		type 			: "post",
		dataType 		: "json",
		url 			: myajax.url,
		data 			: send_data,
		beforeSend	: function(){	
		},
		complete		: function(){
		},
		success			: function(data) {
			that.renderPositions(data.html);
			var newCount = (count * 1 + data.count * 1);
			if (that.max > newCount) {
				that.btn.fadeIn();
			} else {
				that.btn.fadeOut(stickyFooter);
			};
			that.btn.attr('data-count', newCount);
			stickyFooter();
   		 },
    	error	: function (request, status, error) {
    	}
   }); //ajax//

}

TSL_Catalog.prototype.renderCart = function() {
	var that = this;
	that.SB.getData(function(data){
		var $item = data.items,
			$cart = $('body').find('.cart__items'),
			$popupCart = $('body').find('.popup-cart__products'),
			$basketNum = $('body').find('.header__basket--num'),
			$totalBlock = $('body').find('.total__price'),
			$popupTotalBlock = $('body').find('.popup-total__price'),
			total = 0,
			num = 0;
		$cart.html('');
		$popupCart.html('');
		$.each($item, function() {
			$cart.append('<div class="purchase" data-id="' + $(this)[0].SIMPLE_BASKET_ID + '"><div class="purchase__preview"><a href="#" class="purchase__img"><img src="' + $(this)[0].SIMPLE_BASKET_IMAGE + '" alt="" /></a><div class="purchase__del"></div></div><div class="purchase__description"><div class="purchase__name">' + $(this)[0].SIMPLE_BASKET_TITLE + '</div><div class="count"><div class="purchase__control purchase__control--minus">-</div><div class="purchase__quantity"><input type="text" name="name" value="'+ $(this)[0].SIMPLE_BASKET_QUO +'" maxlength="3"></div><div class="purchase__control purchase__control--plus">+</div></div><div class="purchase__price">' + $(this)[0].SIMPLE_BASKET_PRICE + ' P</div></div></div>');
			$popupCart.append('<div class="purchase-small" data-id="' + $(this)[0].SIMPLE_BASKET_ID + '"><div class="purchase-small__preview"><a href="#" class="purchase-small__img"><img src="' + $(this)[0].SIMPLE_BASKET_IMAGE + '" alt=""></a></div><div class="purchase-small__description"><a href="#" class="purchase-small__name">' + $(this)[0].SIMPLE_BASKET_TITLE + '</a><div class="purchase-small__quantity">'+ $(this)[0].SIMPLE_BASKET_QUO +' шт.</div><div class="purchase-small__price">' + $(this)[0].SIMPLE_BASKET_PRICE + ' P</div></div></div>');
			num++;
			var priceItem = $(this)[0].SIMPLE_BASKET_PRICE * $(this)[0].SIMPLE_BASKET_QUO
			total = total + priceItem;
		});
		$basketNum.html(num);
		cart();
		$totalBlock.html(total + ' Р');
		$popupTotalBlock.html(total + ' Р');
    });
}

TSL_Catalog.prototype.delItem = function() {
	var that = this;
	that.SB.getData(function(data){
		var $item = data.items,
			$popupCart = $('body').find('.popup-cart__products'),
			$basketNum = $('body').find('.header__basket--num'),
			$totalBlock = $('body').find('.total__price'),
			$popupTotalBlock = $('body').find('.popup-total__price'),
			total = 0,
			num = 0;
		$popupCart.html('');
		$.each($item, function() {
			$popupCart.append('<div class="purchase-small" data-id="' + $(this)[0].SIMPLE_BASKET_ID + '"><div class="purchase-small__preview"><a href="#" class="purchase-small__img"><img src="' + $(this)[0].SIMPLE_BASKET_IMAGE + '" alt=""></a></div><div class="purchase-small__description"><a href="#" class="purchase-small__name">' + $(this)[0].SIMPLE_BASKET_TITLE + '</a><div class="purchase-small__quantity">'+ $(this)[0].SIMPLE_BASKET_QUO +' шт.</div><div class="purchase-small__price">' + $(this)[0].SIMPLE_BASKET_PRICE + ' P</div></div></div>');
			num++;
			var priceItem = $(this)[0].SIMPLE_BASKET_PRICE * $(this)[0].SIMPLE_BASKET_QUO
			total = total + priceItem;
		});
		$basketNum.html(num);
		cart();
		$totalBlock.html(total + ' Р');
		$popupTotalBlock.html(total + ' Р');
    });
}

