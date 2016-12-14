<?php
/**
 * Класс обработки заказа
 *
 */
class SimpleBasketOrderForm
{
	/**
	 * Корзина
	 * @var SimpleBasketOrder
	 */
	 private $basket;

	/**
	 * URL корзины
	 * @var string
	 */
	 private $basketURL;
	/**
	 * Способ доставки
	 * @var string
	 */
	 private $deliveryType;

	/**
	 * Код заказа
	 * @var string
	 */
	 private $orderId;


	/**
	 * Параметр формы UserName
	 * @var SimpleBasketOrder
	 */
	const USER_NAME = 'username';

	/**
	 * Параметр формы UserEmail
	 * @var SimpleBasketOrder
	 */
	const USER_EMAIL = 'useremail';

	/**
	 * Параметр формы UserPhone
	 * @var SimpleBasketOrder
	 */
	const USER_PHONE = 'userphone';
	/**
	 * Параметр формы UserPhone
	 * @var SimpleBasketOrder
	 */
	const USER_SHIPPING_TYPE = 'usershipping';

	/**
	 * Параметр формы UserComment
	 * @var SimpleBasketOrder
	 */
	const USER_COMMENT = 'usercomment';

	/**
	 * Параметр формы UserAddress
	 * @var SimpleBasketOrder
	 */
	const USER_ADDRESS = 'useraddress';

	
	/**
	 * Типы сообщения пользователю
	 */
	const MAIL_TO_USER = 0;	
	const MAIL_TO_ADMIN = 1;	
	
	

	/**
	 * Конструктор класса
	 */	
	 public function __construct()
	 {
		 $this->basket = SimpleBasketOrder::create();
		 $this->basketURL = get_option('simple_basket_order_page');
		 $this->deliveryType = 0;
		 $this->orderId = '';
	 }

	 public function set_orderID($val) 
	{
		$this->orderId = $val;
	}

	public function get_orderID() 
	{
		return $this->orderId;
	}
	/**
	 * Обработка обращения к форме заказа
	 */	
	 public function handle()
	 {
		// Если пользователь авторизован, пытаемся подставить пустые данные
		// global $current_user;
		// if (is_user_logged_in())
		// {
		// 	get_currentuserinfo();
		// 	if (empty($this->basket->userName))
		// 		$this->basket->userName = $current_user->display_name;
		// 	if (empty($this->basket->userEmail))
		// 		$this->basket->userEmail = $current_user->user_email;
		// 	if (empty($this->basket->userPhone))
		// 		$this->basket->userPhone = esc_attr(get_the_author_meta('phone', $current_user->user_ID));
		// }

		// Обработка добавления
		// if (isset($_GET[SIMPLE_BASKET_ADD]))
		// {
		// 	// Код товара
		// 	$id = (int) $_GET[SIMPLE_BASKET_ADD];
		// 	$product = get_post($id);
		// 	$title = $product->post_title;
		// 	// Цена
		// 	$price = simple_basket_custom_fields($id, get_option('simple_basket_catalog_price'));
		// 	// Вычисляем категорию по таксономии 
		// 	$category = '';
		// 	// Тип записи каталога товара
		// 	$postType = $product->post_type;
		// 	// Таксономии записи
		// 	$taxonomies = get_object_taxonomies($postType);
		// 	// Ищем таксономию, которая не тег
		// 	foreach ($taxonomies as $taxonomy)
		// 	{
		// 		if (strpos($taxonomy, 'tag') !== FALSE) continue;
		// 		// Берем элементы этой таксономии
		// 		$categories = get_the_terms($id, $taxonomy);
		// 		$category = (count($categories) > 0) ? $categories[0]->name : '';
		// 		// Следующие таксономии не рассматриваем
		// 		break;
		// 	}
			
		// 	// Добавляем в корзину
		// 	if (!empty($title)) $this->basket->add($id, $title, $price, $category);
		// 	// Переходим на корзину
		// 	simple_basket_redirect($this->basketURL);
		// }

		// Обработка обновления количества товаров
		// if (isset($_POST[SIMPLE_BASKET_MODE]) && $_POST[SIMPLE_BASKET_MODE] == SIMPLE_BASKET_UPDATE)
		// {
		// 	foreach ($_POST as $key=>$value)
		// 	{
		// 		if (strpos($key, SIMPLE_BASKET_UPDATE) === 0)
		// 		{
		// 			$parts = explode('_', $key);
		// 			$this->basket->update($parts[1], $value);
		// 		}
		// 	}
		// 	// Переходим на корзину
		// 	simple_basket_redirect($this->basketURL);
		// }

		// Обработка нового заказа
		if (isset($_POST[SIMPLE_BASKET_MODE]) && $_POST[SIMPLE_BASKET_MODE] == SIMPLE_BASKET_CHECKOUT)
		{
			// Получение данных
			$this->basket->setUserData(
				trim(strip_tags($_POST[self::USER_NAME])),
				trim(strip_tags($_POST[self::USER_EMAIL])),
				trim(strip_tags($_POST[self::USER_PHONE])),
				trim(strip_tags($_POST[self::USER_COMMENT])),
				trim(strip_tags($_POST[self::USER_ADDRESS])));
			$this->deliveryType = (isset($_POST[self::USER_SHIPPING_TYPE])) ? (int) $_POST[self::USER_SHIPPING_TYPE] : 0;

			// Если данные верны - обрабатываем заказ
			if ($this->basket->isValid())
			{
				// Ищем пользователя
				$user = get_user_by('email', $this->basket->userEmail);
				if (!$user)
				{
					// Такого пользователя нет, добавляем!
					$password = wp_generate_password(12, true);
					$userId = wp_create_user ($this->basket->userEmail, $password, $this->basket->userEmail);
				}
				else
				{
					$userId = $user->id;
				}

				// Обновляем данные о пользователе
				update_user_meta($userId, 'first_name', $this->basket->userName);
				update_user_meta($userId, 'phone', $this->basket->userPhone);

				// Учитываем доставку
				if ($this->deliveryType > 0)
				{
					
					$deliveryTitle = get_the_title($this->deliveryType);
					$deliveryPrice = (float) simple_basket_custom_fields($this->deliveryType, __('Cost', 'simple_basket'));
					$this->basket->add(SIMPLE_BASKET_DELIVERY, $deliveryTitle, $deliveryPrice, __('Delivery', 'simple_basket'));
				}
				

				// Добавляем заказ в таблицу заказов
				$this->orderId = current_time('Ymd-Hi');
				$orderBody = '<p><strong>' . __('Customer', 'simple_basket') . ':</strong> ' . $this->basket->userName . '</p>' .
							'<p><strong>' . __('E-mail', 'simple_basket') . ':</strong> ' . $this->basket->userEmail . '</p>' .
							'<p><strong>' . __('Phone', 'simple_basket') . ':</strong> ' . $this->basket->userPhone . '</p>' .
							'<p><strong>Адрес: </strong> ' . $this->basket->userAddress . '</p>' .
							'<p><strong>Комментарий:</strong> ' . $this->basket->userComment . '</p>' .
							'<div>' . $this->basket->getHTML() . '</div>';
				$newOrder = array(
					'post_type'		=> SIMPLE_BASKET_ORDER_TYPE,
					'post_title'	=> $this->orderId,
					'post_content'	=> $orderBody,
					'post_status'	=> 'publish',
					'post_author'	=> $userId
				);
				$postId = wp_insert_post($newOrder);
				
				// Устанавливаем статус заказа
				wp_set_object_terms($postId, __('New', 'simple_basket'), SIMPLE_BASKET_ORDER_STATUS);
				
				// Устанавливаем общую стоимость заказа
				update_post_meta($postId, __('Summ', 'simple_basket'), $this->basket->getTotal());
				
				// Подготовливаем отправку почты
				add_filter('wp_mail_content_type', 'simple_basket_set_html_content_type'); 
				
				// Высылаем письма пользователю
				$userEmail = $this->prepareLetter(self::MAIL_TO_USER);
				if (!empty($userEmail['body']))
					wp_mail($this->basket->userEmail, $userEmail['subject'], $userEmail['body']);

				// Высылаем письма администраторам
				$adminEmail = $this->prepareLetter(self::MAIL_TO_ADMIN);
				if (!empty($adminEmail['body']))
				{
					$admins = get_users(array('role' => 'Administrator'));
					$adminEmails = array();
					foreach($admins as $admin)
						$adminEmails[] = $admin->user_email;
					wp_mail($adminEmails, $adminEmail['subject'], $adminEmail['body']);
				}

				// reset content-type to to avoid conflicts -- http://core.trac.wordpress.org/ticket/23578
				remove_filter('wp_mail_content_type', 'simple_basket_set_html_content_type'); 
			}
		}
	 }

	/**
	 * Возвращает HTML код письма
	 * @return mixed массив с письмом
	 */	
	public function prepareLetter($type)
	{
		
		if ($type == self::MAIL_TO_USER)
			$mail = array(
				'subject' => get_option('simple_basket_conformation_email_subject'),
				'body' => get_option('simple_basket_conformation_email_post')
			);
		else
			$mail = array(
				'subject' => get_option('simple_basket_admin_email_subject'),
				'body' => get_option('simple_basket_admin_email_post')
			);		

		// Массив замен моих "шорткодов"
		$replacemets = array(
			'[order-code]'		=> $this->orderId,
			'[order-customer]'	=> $this->basket->userName,
			'[order-email]'		=> $this->basket->userEmail,
			'[order-phone]'		=> $this->basket->userPhone,
			'[order-comment]'	=> $this->basket->userComment,
			'[order-address]'	=> $this->basket->userAddress,
			'[order-items]'		=> $this->basket->getHTML(),
		);
		foreach ($replacemets as $shorcode => $replacemet)
		{
			$mail['subject'] = str_replace($shorcode, $replacemet, $mail['subject']);
			$mail['body'] = str_replace($shorcode, $replacemet, $mail['body']);
		}

		return $mail;
	}
	


	/**
	 * Возвращает форму заказа
	 * @return strign HTML код формы заказа
	 */	
	public function getHTML()
	{
		// Если корзина пуста - выводим сообщение
		if ($this->basket->isEmpty())
			return '<div class="popup-block__title popup-block__title--info">' . __('Basket is empty.', 'simple_basket') . '</div>';

		// Заказ сделан, выводим страницу-квитанцию
		if (!empty($this->orderId))
		{
			$output = '<div class="simple-basket-order-complete">' .
						'<h3 class="popup-block__title">' . __('Thank you for your order!', 'simple_basket')  . '</h3>' .  
						'<h4 class="popup-block__title">' . __('Your order code is #', 'simple_basket') . $this->orderId  . '</h4>';
			


			$output .= '</div><!--/simple-basket-order-complete->';

			// Очистка заказа
			$this->orderId = '';
			$this->basket->clear();

			// Вывод
			return $output;
		}
		
		// Начало вывода
		$output = '<div style="position:fixed; right:-1000px" class="simple-basket-order-form">';
		// Вывод корзины
		$output .= $this->getBasketHTML()
			. '</div><!--/basketForm-->';
		// Вывод формы заказа
		$output .= '<div id="orderForm"><h3 class="popup-block__title popup-block__title--info">' . __('Customer Info', 'simple_basket') . '</h3>' . 
			'<form class="orderForm" action="' . $this->basketURL . '" method="post">' . 
				'<input type="hidden" name="' . SIMPLE_BASKET_MODE . '" value="' . SIMPLE_BASKET_CHECKOUT . '" />' .
				'<div class="input">' . 
					'<input id="' . self::USER_NAME . '" type="text" name="' . self::USER_NAME . '" value="' . $this->basket->userName . '" required="required" placeholder="Ваше имя*" />' .
				'</div>' .
				'<div class="input">' . 
					'<input id="' . self::USER_EMAIL . '" type="email" name="' . self::USER_EMAIL . '" value="' . $this->basket->userEmail . '" required="required" placeholder="E-mail*" />' .
				'</div>' .
				'<div class="input">' . 
					'<input id="' . self::USER_PHONE . '" type="tel" name="' . self::USER_PHONE . '" value="' . $this->basket->userPhone . '" required="required" placeholder="Телефон*" />' .
				'</div>';
		// Если есть доставка, учитываем его
		if (get_option('simple_basket_delivery') == '1')
		{
						
			$output .=	
				'<div>' . 
					'<label for="' . self::USER_SHIPPING_TYPE . '">' . __('Shipping Type', 'simple_basket') . '</label>' .
					'<select id="' . self::USER_SHIPPING_TYPE . '" name="' . self::USER_SHIPPING_TYPE . '">';
			$args = array('post_type' => 'delivery');
			$deliveryType = new WP_Query($args);
			while ($deliveryType->have_posts())
			{
				$deliveryType->next_post();
				$selected = ($this->deliveryType == $deliveryType->post->ID) ? ' selected="selected"' : '';
				$output .=	
						'<option value="' . $deliveryType->post->ID . '"' . $selected . '>' . get_the_title($deliveryType->post->ID) . '</option>';
			}
			wp_reset_postdata();
			$output .=
					'</select>' . 
				'</div>';
		}

		$commentPlaceholder = (get_option('simple_basket_delivery') == '1') ? 
			__('Shipping address and other comments', 'simple_basket') : 
			__('Have any comments or wishes? Please enter here...', 'simple_basket');

		$output .= 		
				'<div class="textarea">' . 
					'<textarea id="' . self::USER_ADDRESS . '" name="' . self::USER_ADDRESS . '" required="required" cols="40" rows="4" placeholder="Адресс*">' . $this->basket->userAddress . '</textarea>' .
				'</div>' .
				'<div class="textarea">' . 
					'<textarea id="' . self::USER_COMMENT . '" name="' . self::USER_COMMENT . '"  cols="40" rows="4" placeholder="Комментарий к заказу">' . $this->basket->userComment . '</textarea>' .
				'</div>' .
				'<div class="buttons"><button class="checkout button button--blue popup-block__btn" type="submit">' . __('Checkout Order', 'simple_basket') . '</button></div>' .
			'</form>';
		// Конец вывода
		$output .= '</div><!--/orderForm--></div><!--/simple-basket-order-form-->';

		// Если есть ошибки - выводим ошибки
		if (count($this->basket->errorMessages > 0))
		{
			$output .= '<ul class="error">';
			foreach ($this->basket->errorMessages as $error)
				$output .= '<li>' . $error . '</li>';
			$output .= '</ul>';
		}
		return $output;
	}

	/**
	 * Возвращает преобразованную форму корзины, добавляя в нее кнопки и возможность изменения
	 * @return strign HTML код формы заказа
	 */	
	public function getBasketHTML()
	{
		// Начало вывода
		$output = $this->basket->getHTML();
		$output = '<form class="basketForm" action="' . $this->basketURL . '" method="post">' .
			'<input type="hidden" name="' . SIMPLE_BASKET_MODE . '" value="' . SIMPLE_BASKET_UPDATE . '" />' .  
			preg_replace(
				// patterns
				array(
					'/<td class="quo" data-value="([0-9]+)" data-id="([0-9]+)">[0-9]+/',
				),
				// replacements
				array(
					'<td class="quo"><input type="text" name="' . SIMPLE_BASKET_UPDATE . '_\2" value="\1" />',
				),
				$output
		) . '</form>';
		return $output;
	}

}


?>