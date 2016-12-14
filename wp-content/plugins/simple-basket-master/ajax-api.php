<?php
/**
 * AJAX API корзины
 */

$simpeBasketAPI = new SimpleBasketAPI();


class SimpleBasketAPI
{
	/**
	 * Корзина
	 * @var SimpleBasketOrder
	 */
	 private $basket;	

	/**
	 * Форма заказа
	 * @var SimpleBasketOrderForm
	 */
	 private $orderForm;	



	/**
	 * Конструктор класса
	 */
	public function __construct()
	{
		if ( is_admin() ) 
		{
			add_action( 'wp_ajax_nopriv_getTime', array( &$this, 'getTime'));
			add_action( 'wp_ajax_getTime', array( &$this, 'getTime'));

			add_action( 'wp_ajax_nopriv_getData', array( &$this, 'getData'));
			add_action( 'wp_ajax_getData', array( &$this, 'getData'));

			add_action( 'wp_ajax_nopriv_add', array( &$this, 'add'));
			add_action( 'wp_ajax_add', array( &$this, 'add'));

			add_action( 'wp_ajax_nopriv_del', array( &$this, 'del'));
			add_action( 'wp_ajax_del', array( &$this, 'del'));

			add_action( 'wp_ajax_nopriv_update', array( &$this, 'update'));
			add_action( 'wp_ajax_update', array( &$this, 'update'));

			add_action( 'wp_ajax_nopriv_handle', array( &$this, 'handle'));
			add_action( 'wp_ajax_handle', array( &$this, 'handle'));

			add_action( 'wp_ajax_nopriv_getHTML', array( &$this, 'getHTML'));
			add_action( 'wp_ajax_getHTML', array( &$this, 'getHTML'));

		}
		add_action( 'init', array( &$this, 'init' ) );


		$this->basket = SimpleBasketOrder::create();
		$this->orderForm = new SimpleBasketOrderForm();
	}

	/**
	 * Функция инициализации AJAX
	 */
	public function init()
	{
		wp_enqueue_script('simple-basket', plugin_dir_url( __FILE__ ) . 'js/simple-basket.js', array( 'jquery' ) );
		wp_localize_script('simple-basket', 'SimpleBasket', array(
		    'ajaxurl' => admin_url( 'admin-ajax.php' ),
		    'nonce' => wp_create_nonce( 'ajax-example-nonce' )
		) );
	}

	/**
	 * Функция проверки токена
	 */
	public function validateNonce()
	{
		if ( ! isset( $_REQUEST['nonce'] ) || ! wp_verify_nonce( $_REQUEST['nonce'], 'ajax-example-nonce' ) )
			die ( 'Invalid Nonce' );
	}

	/**
	 * Функция ответа
	 */
	public function responce($result)
	{
		header('Content-Type: application/json');
		echo json_encode($result);
		exit;
	}
	
	/* --------------------- AJAX методы ---------------------- */
	public function getTime()
	{
		$this->validateNonce();
		$this->responce(array(
			'time' => date('d.m.Y H:i:s')
		));
	}

	// Возврат корзины
	public function getData()
	{
		$this->validateNonce();
		$this->responce($this->basket);
	}

	// Добавление товара в корзину
	public function add()
	{
		$this->validateNonce();
		if (!isset($_REQUEST['id']))
			die ( 'ID not specified' );

			// Код товара
			$id = (int) $_REQUEST['id'];
			$product = get_post($id);
			$title = $product->post_title;
			// Цена
			$price = get_field('product_price', $id);
			// Вычисляем категорию по таксономии 
			$category = '';
			// Тип записи каталога товара
			$postType = $product->post_type;
			// Изображение
			$img = get_field('product_img', $id);
			if( !empty($img) ): 
				$image = $img['url'];
			endif;
			// Таксономии записи
			$taxonomies = get_object_taxonomies($postType);
			// Ищем таксономию, которая не тег
			foreach ($taxonomies as $taxonomy)
			{
				if (strpos($taxonomy, 'tag') !== FALSE) continue;
				// Берем элементы этой таксономии
				$categories = get_the_terms($id, $taxonomy);
				$category = (count($categories) > 0) ? $categories[0]->name : '';
				// Следующие таксономии не рассматриваем
				break;
			}
			
			// Добавляем в корзину
			if (!empty($title)) $this->basket->add($id, $title, $price, $image, $category);
		$this->responce($this->basket);
	}

	// Удаление товара из корзины
	public function del()
	{
		$this->validateNonce();
		$id = $_POST['id'];
		$result = $this->basket->delete($id);
		die();
	}

	// Удаление товара из корзины
	public function update()
	{
		$this->validateNonce();
		$id = $_POST['id'];
		$quo = $_POST['quo'];
		$result = $this->basket->update($id,$quo);
		die();
	}


	public function handle()
	{
		$this->orderForm->handle();
		//$this->basket->clear();
		// $result['ordID'] = $this->orderForm->get_orderID();
		$result = $this->orderForm->getHTML();
		//$this->orderForm->set_orderID('');
		$result = json_encode($result);
		echo $result;
		die();
	}

	public function getHTML()
	{
		echo $this->orderForm->getHTML();
		die();
	}
}
