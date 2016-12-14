<?
class TSL_Catalog{
	private $class_name 	= 'catalog';
	function __construct() {
		// Подключаем скрипты
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue' ) );
		// Подключаем ф-цию для обработки Ajax 
		add_action( 'wp_ajax_tsl_catalog_action', array( $this, 'ajax_handler' ) );
		add_action( 'wp_ajax_nopriv_tsl_catalog_action', array( $this, 'ajax_handler' ) );
	 }//construct
	public function enqueue() {
		// Подключаем скрипт для авторизации 
		   wp_register_script('js-'.$this->class_name, get_template_directory_uri() . '/classes/tsl-'.$this->class_name.'/js.'.$this->class_name.'.js', array('jquery.min', 'scripts'), false,'4.3', true ); 
           wp_enqueue_script('js-'.$this->class_name);
	}//enqueue
	public function ajax_handler(){
		$category = $_POST["category"];
		$count = $_POST["count"];
		$need = $_POST["need"];
		$search = $_POST["search"];
		$result["html"] = $this->position($category, $count, $need, $search);
		$result["count"] = $count;
		$result = json_encode($result);
		echo $result;
		die();
	}
	public function position($category, &$count, $need, $search){
		$tax_query = '';
		$s = '';
		if ($category) {
			$tax_query = array(
				'taxonomy' => 'position',
				'field' => 'id',
				'terms' => $category
			);
		}
		if ($search) {
			$product = new WP_Query(
				array(
					's' => $search,
					'post_type' => 'product',
					'posts_per_page' => -1,
					'offset' => $count,
					'tax_query' => array(
						$tax_query
					)
				)
			);
		} else {
			$product = new WP_Query(
				array(
					'post_type' => 'product',
					'posts_per_page' => $need,
					'offset' => $count,
					'tax_query' => array(
						$tax_query
					)
				)
			);
		}
		
	ob_start();
        	

			$i = 0; while ( $product->have_posts() ) { $product->the_post(); $i++;?>

			<div class="catalog__item product">
	          <div class="product__preview">
							<?php 
							$image = get_field('product_img');
							if( !empty($image) ): ?>
								<a href="<?php echo $image['url']; ?>" class="product__img">
									<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
								</a>
								<a href="<?php echo $image['url']; ?>" class="product__link product__link--increase">Увеличить</a>
							<?php endif; ?>
							<?php echo do_shortcode( '[basket-buy-button]' ); ?>
	          </div>
	          <a href="#" class="product__name">
	            <? the_title(); ?>
	          </a>
	          <div class="product__price">
	            <?php the_field('product_price'); ?> Р
	          </div>
	        </div>

		<? } wp_reset_postdata();

		$layout = ob_get_clean();
		$count = $i;
		return $layout;
	}
}//class SendMessage
$tsl_catalog = new TSL_Catalog();