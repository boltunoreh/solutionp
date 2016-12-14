jQuery(document).ready( function() {



//AJAX: Удаление элемента из корзины
jQuery(".cart-clear").on('click', function(e){
	var send_data = jQuery(this).data();
	var id = jQuery(this).data('id');
	send_data['nonce'] = TSL_Shop.nonce;
	send_data['action'] = 'tsl_delete_item';
	jQuery.ajax({
		type 		: "post",
		dataType 	: "json",
		url 		: TSL_Shop.ajaxurl,
		data 		: send_data,
		success		: function(response) {
			if (response) {
				location.reload();
			}
    }
   }) 
});//.cart-clear

//AJAX: Покупка
jQuery(".item-buy").on('click', function(e){
	var send_data = jQuery(this).data();
	
	send_data['size'] = jQuery(this).parent(".item, .text").find('.sizes option:selected').val();
	send_data['nonce'] = TSL_Shop.nonce;
	send_data['action'] = 'tsl_add_item';
	jQuery.ajax({
		type 		: "post",
		dataType 	: "json",
		url 		: TSL_Shop.ajaxurl,
		data 		: send_data,
		success		: function(response) {
			console.log(response);
			basket_reload();
    }
   }) //ajax
});//.item-buy

//AJAX: Очистка корзины
jQuery(".cart-clear-all").on('click', function(e){
	basket_clear_all();
});//.cart-clear-all

//Виджет корзины
if (jQuery(".item-buy").size() > 0 ) basket_reload();

function explode( delimiter, string ) {	// Split a string by string
	// 
	// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// +   improved by: kenneth
	// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)

	var emptyArray = { 0: '' };

	if ( arguments.length != 2
		|| typeof arguments[0] == 'undefined'
		|| typeof arguments[1] == 'undefined' )
	{
		return null;
	}

	if ( delimiter === ''
		|| delimiter === false
		|| delimiter === null )
	{
		return false;
	}

	if ( typeof delimiter == 'function'
		|| typeof delimiter == 'object'
		|| typeof string == 'function'
		|| typeof string == 'object' )
	{
		return emptyArray;
	}

	if ( delimiter === true ) {
		delimiter = '1';
	}

	return string.toString().split ( delimiter.toString() );
}

});

function basket_clear_all(){
	jQuery.ajax({
		type 		: "post",
		dataType 	: "json",
		url 		: TSL_Shop.ajaxurl,
		data 		: ({
			action: 'tsl_clear_all',
			nonce: TSL_Shop.nonce
		}),
		success		: function(response) {
			window.location="/magazin/"
			//location.reload();
    }
   })
} //basket_clear_all

function basket_reload(){
	jQuery.ajax({
		type 		: "post",
		dataType 	: "json",
		url 		: TSL_Shop.ajaxurl,
		data 		: ({
			action: 'tsl_get_data',
			nonce: TSL_Shop.nonce
		}),
		success		: function(response) {
			var count = 0;
			var total = 0;
				for (i in response) { 
					for (j in response[i]) {
						count++;
						total += response[i][j]['TSL_BASKET_PRICE'] * response[i][j]['TSL_BASKET_QUO'];
					} 
				}
			if (count != 0){
				if (jQuery(".cart-widget").size() == 0 ) jQuery('body').append('<div class="cart-widget"><a href="/magazin/cart/"><span class="cart-widget-text">Перейти в корзину<span class="cart-widget-responsive"> и купить <span id="tsl_shop-count"></span> на сумму <span id="tsl_shop-total"></span> Р</span></span></a></div>');
				$(window).trigger('cartmove');
				jQuery('#tsl_shop-count').text(count + ' ' + format_by_count(count, 'товар', 'товара', 'товаров'));
				jQuery('#tsl_shop-total').text(total);
			}	
	  }
	});
}//basket_reload

// Склонение
function format_by_count(count, form1, form2, form3) {
    var count = count % 100;
    var lcount = count % 10;
    if (count >= 11 && count <= 19) return(form3);
    if (lcount >= 2 && lcount <= 4) return(form2);
    if (lcount == 1) return(form1);
    return form3;
}