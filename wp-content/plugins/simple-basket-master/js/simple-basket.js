/**
 * JS API корзины
 */

jQuery(function ($)
{

	// Демо-метод вывода времени с сервера
	SimpleBasket.getTime = function (callback)
	{
		jQuery.ajax({
			url: SimpleBasket.ajaxurl,
			type: 'POST',
			data: ({
				action: 'getTime',
				nonce: SimpleBasket.nonce
			}),
			success: function (data)
			{
				if (callback) callback(data);
			}
		});
	}

	// Метод выводит содержимое корзины
	SimpleBasket.getData = function (callback)
	{
		jQuery.ajax({
			url: SimpleBasket.ajaxurl,
			type: 'POST',
			data: ({
				action: 'getData',
				nonce: SimpleBasket.nonce
			}),
			success: function (data)
			{
				if (callback) callback(data);
			}
		});
	}

	// Метод добавляет товар в корзину
	SimpleBasket.add = function (id, callback)
	{
		if (!id) return;
		jQuery.ajax({
			url: SimpleBasket.ajaxurl,
			type: 'POST',
			data: ({
				action: 'add',
				nonce: SimpleBasket.nonce,
				'id': id 
			}),
			success: function (data)
			{
				console.log(data);
				if (callback) callback(data);
			}
		});
	}

	// Метод удаляет товар из корзины
	SimpleBasket.del = function (id, callback)
	{
		if (!id) return;
		jQuery.ajax({
			url: SimpleBasket.ajaxurl,
			type: 'POST',
			data: ({
				action: 'del',
				nonce: SimpleBasket.nonce,
				'id': id 
			}),
			success: function (data)
			{
				console.log(data);
				if (callback) callback(data);
			}
		});
	}

	// Метод обновляет количество товара в корзине
	SimpleBasket.update = function (id, quo, callback)
	{
		if (!id) return;
		jQuery.ajax({
			url: SimpleBasket.ajaxurl,
			type: 'POST',
			data: ({
				action: 'update',
				nonce: SimpleBasket.nonce,
				'id': id,
				'quo' : quo
			}),
			success: function (data)
			{
				console.log(data);
				if (callback) callback(data);
			}
		});
	}


	// SimpleBasket.handle = function (callback)
	// {
	// 	jQuery.ajax({
	// 		url: SimpleBasket.ajaxurl,
	// 		type: 'POST',
	// 		data: ({
	// 			action: 'handle',
	// 			nonce: SimpleBasket.nonce,
	// 		}),
	// 		success: function (data)
	// 		{	
	// 			$('.popup-block--info').html('<h3 class="popup-block__title popup-block__title--info">Ваш заказ №20151215-1559 принят в обработку</h3>');
	// 			$('.popup-block--cart').css({opacity : 0});
	// 			console.log(data);
	// 			if (callback) callback(data);
	// 		}
	// 	});
	// }


	SimpleBasket.getHTML = function (callback)
	{
		jQuery.ajax({
			url: SimpleBasket.ajaxurl,
			type: 'POST',
			data: ({
				action: 'getHTML',
				nonce: SimpleBasket.nonce,
			}),
			success: function (data)
			{	
				$('.popup-block--info').html(data);
				$('.popup-block--cart').css({opacity : 1});
				if (callback) callback(data);
			}
		});
	}

	

});