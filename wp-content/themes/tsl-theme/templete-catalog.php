<?php /* Template Name: Страница каталога */ ?>
<?php
get_header();
?>
		<div class="scrolling">
    <div class="header-container">
      <header class="header header--catalog"><div class="header__container">
  			<a href="<? echo(get_home_url()) ?>" class="header__logo">
  				<?php 
				$image = get_field('logo_blue', 'option');
				if( !empty($image) ): ?>
					<img src="<?php echo $image['url']; ?>" alt="" />
				<?php endif; ?>
  			</a>
  			<a href="<? echo(get_home_url()) ?>" class="header__btn button button--noborder button--transparent-blue">На главную</a>
        <div class="header__search">
          <input type="text" name="name" value="" placeholder="Поиск по каталогу">
        </div>
  			<div class="header__btn button button--transparent-blue open-popup2 close-cart">
  				Связаться с нами
  			</div>
        <div class="header__basket header__basket--filled button button--blue open-cart">
          <div class="header__basket--num"></div>
  				Корзина
  			</div>
  		</div></header>
    </div>

    <?php
    $i = 1;
	if( have_rows('catalog_filter_sections') ): ?>
		<section class="categories">
      		<div class="categories__in">
	    <? while ( have_rows('catalog_filter_sections') ) : the_row(); ?>

	    	<div class="category">

	    	<?php 
			$image = get_sub_field('catalog_filter_sections_ico');
			if( !empty($image) ): ?>
				<div class="category__ico" style="background-image: url('<?php echo $image['url']; ?>')"></div>
			<?php endif; ?>
	          
	          <div class="category__title"><? the_sub_field('catalog_filter_sections_title'); ?></div>

				<?php
				$j = 1;
				if( have_rows('catalog_filter_sections_items') ): 
					
					?>
				 	<div class="itemlist">
				    <? while ( have_rows('catalog_filter_sections_items') ) : the_row(); 
				        $objItemlink = get_sub_field('catalog_filter_sections_items_link'); ?>
				        <a href="" data-max="<?=$objItemlink->count ?>" data-category="<?=$objItemlink->term_id ?>" class="itemlist__item"><?=$objItemlink->name ?></a>
						<? $j++; ?>
				    <? endwhile; ?>
					</div>
				<? else :
				endif;
				?>
	        </div>
	        <? $i++; ?>
	    <? endwhile; ?>
			</div>
			<div class="categories__roll">
				<span class="roll">Свернуть фильтр</span>
			</div>
		</section>
	<? else :
	endif;
	?>

    </div>

    	<section class="popup popup2">
				<div class="popup__row popup__row--center">
					<div class="popup__close close-popup"></div>
					<h2>
						<div class="switch-title switch-title--left">Заказать звонок</div>
						<div class="popup__switcher switch"><span class="switch__item"></span></div>
						<div class="switch-title switch-title--right switch-title--disable">Оставить сообщение</div>
					 </h2>
					 <div class="blocks">
						<div class="popup-block">
							<?php echo do_shortcode( '[contact-form-7 id="123" title="Заказать звонок"]' ); ?>
						</div>
						<div class="popup-block popup-block--hidden">
							<?php echo do_shortcode( '[contact-form-7 id="124" title="Оставить сообщение"]' ); ?>
						</div>
					</div>
					<div class="popup__contacts contacts">
	          <div class="contacts__item contacts__item--phone contacts__item--phone-popup">
	            <? the_field('phone', 'option'); ?>
	          </div>
	          <a href="mailto:<? the_field('mail', 'option'); ?>" class="contacts__item contacts__item--mail contacts__item--mail-popup">
	            <? the_field('mail', 'option'); ?>
	          </a>
	        </div>
					<div class="popup__social social">
						<a href="#" class="social__item social__item--fb-p"></a>
						<a href="#" class="social__item social__item--insta-p"></a>
						<a href="#" class="social__item social__item--tw-p"></a>
	        </div>
				</div>
			</section>

		<section class="popup">
			<div class="popup__row">
				<div class="popup__close close-popup"></div>
				<h2>Оформить заказ</h2>
				<div class="popup-block popup-block--cart">
					<h3 class="popup-block__title popup-block__title--cart">Ваш заказ</h3>
					<a href="#" class="popup-block__link close-popup open-cart">изменить</a>
					<div class="popup-cart__products"></div>

					<div class="popup-total">
						<div class="popup-total__title">
							Итого
						</div>
						<div class="popup-total__price">
							10 000.65 P
						</div>
					</div>
				</div>
				<div class="popup-block popup-block--info">
					
				</div>
			</div>
		</section>

		<section class="cart">
    <div class="cart-in">
			<div class="cart__title">
				Корзина
				<div class="cart__close close-cart"></div>
			</div>
			<div class="cart__items">

			</div>

			<div class="cart__total total">
				<div class="total__title">Итого</div>
				<div class="total__price">0 P</div>
				<a href="#" class="button button--blue open-popup close-cart">Оформить заказ</a>
				<a href="#" class="total__btn button button--transparent-blue button--noborder close-cart">Продолжить покупки</a>
			</div>
      </div>
		</section>

    <section class="catalog">
      <div class="catalog__in">
      	<div class="product-list">

      	<?php
		$product = new WP_Query(
			array(
				'post_type' => 'product',
				'posts_per_page' => get_field('catalog_count','option'),
			)
		  );
		?>

		<? 
		$count = 0; while ( $product->have_posts() ) { $product->the_post(); $count++;
		
		?>

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
	          <div class="product__name">
	            <? the_title(); ?>
	          </div>
	          <div class="product__price">
	            <?php the_field('product_price'); ?> Р
	          </div>
	        </div>

		<? } wp_reset_postdata(); ?>
		</div>
        <div class="catalog__btn">
          <span class="button button--transparent-blue" data-category="" data-count="<?=$count ?>" data-need="<?=get_field('catalog_count','option'); ?>">Показать ещё</span>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="footer__in">
        <div class="footer__copyright">
          © 2014 Solution-P
        </div>
        <div class="footer__contacts contacts">
          <div class="contacts__item contacts__item--phone">
            <? the_field('phone', 'option'); ?>
          </div>
          <div class="contacts__item contacts__item--mail">
            <a href="mailto:<? the_field('mail', 'option'); ?>"><? the_field('mail', 'option'); ?></a>
          </div>
        </div>
        <div class="footer__social social">
					<a href="<? the_field('facebook', 'option'); ?>" target="_blank" class="social__item social__item--fb"></a>
					<a href="<? the_field('instagram', 'option'); ?>" target="_blank" class="social__item social__item--insta"></a>
					<a href="<? the_field('twitter', 'option'); ?>" target="_blank" class="social__item social__item--tw"></a>
        </div>
      </div>
    </footer>
    <div class="fill close-cart"></div>

<? get_footer(); ?>