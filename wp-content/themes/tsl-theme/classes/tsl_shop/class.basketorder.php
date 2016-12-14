<?
class TSL_BasketOrder{

	const ITEMS			= 'TSL_BASKET_ITEMS';
	const TITLE			= 'TSL_BASKET_TITLE';
	const QUO			= 'TSL_BASKET_QUO';
	const PRICE			= 'TSL_BASKET_PRICE';
	const IMG			= 'TSL_IMG';
	const LINK			= 'TSL_LINK';
	const SIZE			= 'TSL_SIZE';


	/**
	 * Элементы заказа
	 * @var mixed
	 */
	public $items;

	private static $instance = NULL;

	public static function create()
	{
		if (!self::$instance)
		self::$instance = new TSL_BasketOrder();
		return self::$instance;
	}

	private function __construct()
	{
		$this->items = (isset($_SESSION[self::ITEMS])) ? $_SESSION[self::ITEMS] : array();
	}

	public function __destruct()
	{
		$_SESSION[self::ITEMS] = $this->items;
	}

/**
	 * Добавляет в заказ очередной элемент
	 * @param string id Код продукта
	 * @param string title наименование товара
	 * @param float price цена товара
	 */
	 public function add($id, $title, $price, $img, $link, $size)
	 {
			
		// Если такой элемент уже есть...
		if (array_key_exists($id.'-'.$size, $this->items))
		{			
			// Увеличим количество
			$this->items[$id.'-'.$size][self::QUO]++;	
		}
		else
		{
			// Добавим элемент
			$this->items[$id.'-'.$size] = array
			(
				self::TITLE => $title,
				self::QUO	=> 1,
				self::PRICE => $price,
				self::IMG => $img,
				self::LINK => $link,
			);			
		}

	 }//add

/**
	 * Удаляет из заказа элемент
	 * @param string id Код продукта
	 */
	 public function delete($id)
	 {
		unset($this->items[$id]);
		return true;
	 }//delete




	/**
	 * Очистка заказа
	 */
	 public function clear()
	 {
		 $this->items = array();
	 }//clear

	/**
	 * Возвращает общую сумму заказа
	 * @return float сумма заказа
	 */
	 public function getTotal()
	 {
	 	$total = 0;
		foreach ($this->items as $id=>$item)
			$total += $item[self::QUO] * $item[self::PRICE];
		return $total;
	 }

	 public function htmlCartTable(){
		ob_start();?>
	 	<table class="table table-cart">
					<thead>
						<tr>
							<th width="50"></th>
							<th>Название</th>
							<th width="150">Размер</th>
							<th width="150">Цена</th>
							<th width="150">Количество</th>
							<th width="150">Сумма</th>
							<th width="30"></th>
						</tr>
					</thead>
					<tbody>
					<?foreach ($this->items as $id => $item) {?>
						<tr id="tr-<?=$id?>">
							<td class="table-cart-image">
								<a href="<?=$item[self::IMG]?>" class="modal">
									<img src="<?=$item[self::IMG]?>" width="50" height="50" alt="">
								</a>
							</td>
							<td class="table-cart-title"><a href="<?=$item[self::LINK]?>"><?=$item[self::TITLE]?></a></td>
							<td class="table-cart-size"><?=$this->get_size($id);?></td>
							<td class="table-cart-price"><?=number_format($item[self::PRICE],0,""," ")?></td>
							<td class="table-cart-num"><?=$item[self::QUO]?><?=$item[self::SIZE]?></td>
							<td class="table-cart-sum"><?=number_format($item[self::QUO]*$item[self::PRICE],0,""," ")?></td>
							<td class="table-cart-control"><span class="cart-clear" data-id="<?=$id?>"></span></td>
						</tr>
						<?}?>
						<tr class="table-cart-itogo">
							<td colspan="4">
								<span class="cart-clear-all">Очистить корзину</span>
							</td>
							<td>Итого</td>
							<td colspan="2"><?=number_format($this->getTotal(),0,""," ")?> Р</td>
						</tr>
					</tbody>
				</table>
	 <?
		return ob_get_clean();
	}

		 public function htmlCartTableToMsg(){
		ob_start();?>
	 	<table cellpadding=10 cellspacing=0 border=1 width=100%>
					<thead>
						<tr>
							<th>Название</th>
							<th>Размер</th>
							<th>Цена</th>
							<th>Количество</th>
							<th>Сумма</th>
						</tr>
					</thead>
					<tbody>
					<?foreach ($this->items as $id => $item) {?>
						<tr>
							<td ><a href="<?=$item[self::LINK]?>"><?=$item[self::TITLE]?></a></td>
							<td ><?=$this->get_size($id);?></td>
							<td ><?=number_format($item[self::PRICE],0,""," ")?></td>
							<td ><?=$item[self::QUO]?></td>
							<td ><?=number_format($item[self::QUO]*$item[self::PRICE],0,""," ")?></td>
						</tr>
						<?}?>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td>Итого</td>
							<td><?=number_format($this->getTotal(),0,""," ")?> Р</td>
						</tr>
					</tbody>
				</table>
	 <?
		return ob_get_clean();
	}

	
	//получаем размер
	public function get_size($item){
		$arr = explode('-', $item);
		return $arr[1];
	}

	 public function outputCart(){?>
		<?if ($this->getTotal()){?>
		<?
		if (is_user_logged_in()){
			$user_info = new UserInfo();
			$user_name = $user_info->get_full_name();
			$user_phone = $user_info->phone;
			$user_email = $user_info->email;
			$rel = 'noclear';
		}else{
			$user_name = '';
			$user_phone = ''; 
			$user_email = ''; 
			$rel = '';
		}
		?>
	 			<div class="cart-wrapper">
					<?=$this->htmlCartTable();?>
				</div>
				<div class="papper-block papper-white papper-small cart-order-form">
            <form class="send_message">
            <div class="title">Оформление заказа</div>
            
					<div class="form-block">
						<label for="cart-order-form-name">Имя</label>
						<input rel="<?=$rel;?>" name="user_name" type="text" id="cart-order-form-name" value="<?=$user_name?>">
					</div>

					<div class="form-block">
						<label for="cart-order-form-phone">Телефон</label>
						<input rel="<?=$rel;?>" name="user_phone" type="text" id="cart-order-form-phon" value="<?=$user_phone?>">
					</div>
            

          <div class="form-block hlpr-hide">
              <label for="callback-protection">Защита</label>
              <input name="protection" type="text" value="" />
          </div>
            
            
					<div class="form-btn">
					<button type="submit" class="square-btn" id="tsl_shop-send">Оформить заказ</button>
              <input type="hidden" name="action" value="tsl_ss_action">
              <input type="hidden" name="order" value='<?=$this->htmlCartTableToMsg();?>'>
              <input type="hidden" name="mail_subject" value="Заказ в магазине">
              <input type="hidden" name="required" value="user_name,user_phone">
              <input type="hidden" name="test_1" value="user_phone">
              <input type="hidden" name="message" value="user_name:Клиент,user_phone:Телефон,order:Заказ">
              <input type="hidden" name="admin_email" value="<?echo get_option('email_shop'); ?>">
              <?wp_nonce_field( 'ajax-auth-nonce', 'security' );?>
          </div>
      </form>   
			</div>
				<?}else{?>
					<div class="cart-wrapper">Корзина пуста</div>
				<?}
	 		}

}//class TSL_BasketOrder


