<?
@session_start();
class TSL_Shop{

	private $basket;
	private $class_name 	= 'shop';

	function __construct() {

		$this->basket = TSL_BasketOrder::create();

		// Подключаем скрипты
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue' ) );

		// Подключаем ф-цию добавление в корзину
		add_action( 'wp_ajax_tsl_add_item', array( $this, 'add_item' ) );
		add_action( 'wp_ajax_nopriv_tsl_add_item', array( $this, 'add_item' ) );

		// Подключаем ф-цию данные для виджета корзины
		add_action( 'wp_ajax_tsl_get_data', array( $this, 'get_data' ) );
		add_action( 'wp_ajax_nopriv_tsl_get_data', array( $this, 'get_data' ) );

		// Подключаем ф-цию очистки всей корзины
		add_action( 'wp_ajax_tsl_clear_all', array( $this, 'clear_all' ) );
		add_action( 'wp_ajax_nopriv_tsl_clear_all', array( $this, 'clear_all' ) );

		// Подключаем ф-цию удаление элемента из корзины
		add_action( 'wp_ajax_tsl_delete_item', array( $this, 'delete_item' ) );
		add_action( 'wp_ajax_nopriv_tsl_delete_item', array( $this, 'delete_item' ) );

		
	 }//construct

	public function enqueue() {
		// Подключаем скрипт для авторизации 
		wp_register_script('js-'.$this->class_name, get_template_directory_uri() . '/classes/tsl_'.$this->class_name.'/js.'.$this->class_name.'.js', array('jquery') ); 
		wp_enqueue_script('js-'.$this->class_name);

		wp_localize_script('js-'.$this->class_name, 'TSL_Shop', array(
			'ajaxurl' => admin_url( 'admin-ajax.php' ),
			'nonce' => wp_create_nonce( 'ajax-'.$this->class_name.'-nonce')
		) );
	}//enqueue

	//Функция проверки токена
	public function validateNonce()
	{
		if ( ! isset( $_REQUEST['nonce'] ) || ! wp_verify_nonce( $_REQUEST['nonce'], 'ajax-'.$this->class_name.'-nonce' ) )
			die ( 'Invalid Nonce' );
	}


	public function add_item(){
		$this->validateNonce();
		//Извлекаем параметры заказа из массива $_POST
		$id = $_POST['id'];
		$size = $_POST['size'];
		$title = get_the_title($id);
		$price = get_field('shop_price', $id);

		$obj_img = wp_get_attachment_image_src(get_post_thumbnail_id($id), 'large');
		$img = $obj_img[0];
		$link = get_permalink($id);

		$this->basket->add($id, $title, $price, $img, $link, $size);
		//$this->basket->clear();
		$result = $this->basket;
		$result = json_encode($result);
		echo $result;
		die();
	}

	public function get_data(){
		$this->validateNonce();
		$result = $this->basket;
		$result = json_encode($result);
		echo $result;
		die();
	}

	public function clear_all(){
		$this->validateNonce();
		$this->basket->clear();
		$result = $this->basket;
		$result = json_encode($result);
		echo $result;
		die();
	}

	public function delete_item(){
		$this->validateNonce();
		$id = $_POST['id'];
		$result = $this->basket->delete($id);
		$result = json_encode($result);
		echo $result;
		die();
	}

	public function outputCart(){
		$this->basket->outputCart();
	}

}//class TSL_Shop
$tsl_shop = new TSL_Shop();


