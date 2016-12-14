<?php /* Template Name: Главная страница */ ?>
<?php get_header(); ?>

		<div class="loader"></div>
		<header class="header header--main emerge" data-duration="1000" data-effect="relax" data-origin="bottom" data-hold="1500"><div class="header__container"><div class="header__container">
			<a href="<? echo(get_home_url()) ?>" class="header__logo">

			<?php 
			$image = get_field('logo', 'option');
			if( !empty($image) ): ?>
				<img src="<?php echo $image['url']; ?>" alt="" />
			<?php endif; ?>
				
			</a>
				<ul class="header__nav menu">
					<li class="menu__item" style="display:none;"><a href="#intro-screen"></a></li>
					<li class="menu__item"><a href="#service-slider">Услуги</a></li>
					<li class="menu__item"><a href="#promo">Проекты</a></li>
					<li class="menu__item"><a href="#clients">Клиенты</a></li>
					<li class="menu__item"><a href="#partners">Партнеры</a></li>
					<li class="menu__item"><a href="#contacts">Контакты</a></li>
					<!--<li class="menu__item menu__item--catalog"><a href="/catalog">Каталог</a></li>-->
				</ul>
			<div class="header__btn button button--blue open-popup">
				Связаться с нами
			</div>
		</div></header>

			<nav class="navigation emerge" data-duration="1000" data-effect="relax" data-origin="bottom" data-hold="1500">
				<div class="navigation__pin navigation__pin--current"></div>
				<div class="navigation__pin"></div>
				<div class="navigation__pin"></div>
				<div class="navigation__pin"></div>
				<div class="navigation__pin"></div>
				<div class="navigation__pin"></div>
			</nav>

			<section class="popup">
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
				
				<?php 
				$image = get_field('index_fs_background');
				if( !empty($image) ): ?>
					<section id="intro-screen" class="intro-screen fullscreen screen screen--active" style="background-image: url('<?php echo $image['url']; ?>')">
				<?php endif; ?>
				
					<div class="screen__in">
						<div class="content">
							<?php 
							$image = get_field('index_fs_logo');
							if( !empty($image) ): ?>
								<img class="intro-screen__logo emerge" src="<?php echo $image['url']; ?>" alt="" data-duration="3500" data-effect="slide" data-up="50px" data-origin="bottom" data-hold="500"/>
							<?php endif; ?>
							<article class="emerge" data-up="50px" data-duration="3000" data-effect="slide" data-origin="bottom" data-hold="700">
								<p>
									<?php the_field('index_fs_text'); ?>
								</p>
							</article>
						</div>
					</div>
					<div class="intro-screen__next emerge" data-duration="1000" data-effect="relax" data-origin="bottom" data-hold="1500">
						Наши услуги
					</div>
				</section>

				<div class="screen">
				<div id="service-slider" class="service-slider fullscreen">

				<?php 
				$image = get_field('index_service_background');
				if( !empty($image) ): ?>
					<section class="services-screen fullscreen service-screen" style="background-image: url('<?php echo $image['url']; ?>')">
				<?php endif; ?>

				
					<div class="screen__in">
						<div class="content">
							<h2><? the_field('index_service_title'); ?></h2>
							<article>
								<p>
									<? the_field('index_service_text'); ?>
								</p>
							</article>
	
							<?php
							if( have_rows('index_service_slide') ): ?>
								<div class="services-screen__blocks blocks blocks--long">
							    <? while ( have_rows('index_service_slide') ) : the_row(); ?>

							        <div class="blocks__item block block-h b_link">
										<?php 
										$image = get_sub_field('index_service_slide_ico');
										if( !empty($image) ): ?>
											<div class="block__ico" style="background-image: url('<?php echo $image['url']; ?>')"></div>
										<?php endif; ?>

										<?php 
										$image = get_sub_field('index_service_slide_ico_h');
										if( !empty($image) ): ?>
											<div class="block__hover" style="background-image: url('<?php echo $image['url']; ?>')"></div>
										<?php endif; ?>
										<div class="block__title">
											<span><? the_sub_field('index_service_slide_title'); ?></span>
										</div>
									</div>

							    <? endwhile; ?>
							    </div>
							<? else :
							endif;
							?>


							<?php
							$bool = true;
							if( have_rows('index_service_slide') ): ?>
								<div class="button button--transparent-white service-slider__next">
							    <? while ( have_rows('index_service_slide') ) : the_row(); ?>
							        <?php
										if ($bool == true): 
											the_sub_field('index_service_slide_title');
										else : ?>
										<?php endif; ?>
							        <? $bool = false; ?> 
							    <? endwhile; ?>
								    <div class="button__arrow"></div>
								</div>
							<? else :
							endif;
							?>
								
						</div>
					</div>
				</section>

				<?php
				if( have_rows('index_service_slide') ):
				    while ( have_rows('index_service_slide') ) : the_row(); ?>					

						<?php 
						$image = get_sub_field('index_service_slide_background');
						if( !empty($image) ): ?>
							<section class="fullscreen service-screen" style="background-image: url('<?php echo $image['url']; ?>')">
						<?php endif; ?>
				        
							<div class="screen__in">
								<div class="content">
									<h2><? the_sub_field('index_service_slide_title'); ?></h2>
									<article>
										<p>
											<? the_sub_field('index_service_slide_text'); ?>
										</p>
									</article>

									<?php
									if( have_rows('index_service_slide_block') ): ?>
										<div class="service-screen__blocks blocks blocks--short">
									    <? while ( have_rows('index_service_slide_block') ) : the_row(); ?>
									        <div class="blocks__item block">
										<?php 
										$image = get_sub_field('index_service_slide_block_ico');
										if( !empty($image) ): ?>
											<div class="block__ico" style="background-image: url('<?php echo $image['url']; ?>')"></div>
										<?php endif; ?>
											
											<div class="block__title">
												<? the_sub_field('index_service_slide_block_text'); ?>
											</div>
										</div>

									    <? endwhile; ?>
									    </div>
									<?else :
									endif;
									?>			

									<div class="line">
										<div class="prev_screen line__prev service-slider__prev" style="display: block;">
										</div>
										<div class="button button--blue line__btn open-popup">
											Оставить заявку на услугу
										</div>
										<div class="next_screen line__next service-slider__next disabled" style="display: block;">
										</div>
									</div>
								</div>
							</div>
						</section>

				    <? endwhile;

				else :
				endif;
				?>

				</div>
					<div class="services-screen__nav screen_nav">
					</div>
				</div>

				<section id="promo" class="promo fullscreen fixheight screen" 
				<?php 
				$image = get_field('index_promo_bg');
				if( !empty($image) ): ?>
					style="background-image:url('<?php echo $image['url']; ?>')"
				<?php endif; ?>
				
				>
					<div class="screen__in">
						<div class="content">
							<? $image = get_field('index_promo_img');
							if( !empty($image) ): ?>
								<img class="promo__img" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
							<?php endif; ?>
							<h2><?php the_field('index_promo_title'); ?></h2>
							<article class="long">
								<p>
									<?php the_field('index_promo_text'); ?>
								</p>
							</article>
							<div class="button button--blue promo__btn open-popup">
								Оставить заявку на услугу
							</div>
						</div>
					</div>
				</section>

				<section id="clients" class="clients fixheight fullscreen screen">
					<div class="screen__in">
						<div class="content content--clients">
							<div class="slider__nav slider__nav--prev"></div>
							<div class="slider__nav slider__nav--next"></div>
							<div class="slider">

								<?php
								if( have_rows('index_clients_slide') ): ?>
									<div class="slider__container">
								    <? while ( have_rows('index_clients_slide') ) : the_row(); ?>

								    <?php
									if( have_rows('index_clients_slide_client') ): ?>
										<div class="slide blocks blocks--short">
									    <? while ( have_rows('index_clients_slide_client') ) : the_row(); ?>
									        <div class="blocks__item block client">
												<div class="block__ico client__ico">

													<?php 
													$image = get_sub_field('index_clients_slide_client_img');
													if( !empty($image) ): ?>
														<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
													<?php endif; ?>

													<span class="client__hover">
														<?php 
														$image = get_sub_field('index_clients_slide_client_img_h');
														if( !empty($image) ): ?>
															<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
														<?php endif; ?>
													</span>
												</div>
											</div>

									    <? endwhile; ?>
										</div>
									<? else :
									endif; 
									?>

								    <? endwhile; ?>
								    </div>
								<? else :
								endif;
								?>

							</div>
						</div>
					</div>
					<div class="screen_nav screen_nav--clients">
					</div>
				</section>

				<section id="partners" class="clients fixheight fullscreen screen">
					<div class="screen__in">
						<div class="content content--clients">
							<div class="slider__nav slider__nav--prev"></div>
							<div class="slider__nav slider__nav--next"></div>
							<div class="slider">

								<?php
								if( have_rows('index_partners_slide') ): ?>
									<div class="slider__container">
								    <? while ( have_rows('index_partners_slide') ) : the_row(); ?>

								    <?php
									if( have_rows('index_partners_slide_client') ): ?>
										<div class="slide blocks blocks--short">
									    <? while ( have_rows('index_partners_slide_client') ) : the_row(); ?>
									        <div class="blocks__item block client">
												<div class="block__ico client__ico">

													<?php 
													$image = get_sub_field('index_partners_slide_client_img');
													if( !empty($image) ): ?>
														<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
													<?php endif; ?>

													<span class="client__hover">
														<?php 
														$image = get_sub_field('index_partners_slide_client_img_h');
														if( !empty($image) ): ?>
															<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
														<?php endif; ?>
													</span>
												</div>
											</div>

									    <? endwhile; ?>
										</div>
									<? else :
									endif; 
									?>

								    <? endwhile; ?>
								    </div>
								<? else :
								endif;
								?>

							</div>
						</div>
					</div>
					<div class="screen_nav screen_nav--clients">
					</div>
				</section>

				<section id="contacts" class="contacts fullscreen screen">
					<div class="contacts__shadow"></div>
					<div class="contacts__in screen__in">
						<div class="content">
							<div class="infoblock">
								<h2>Контакты</h2>
								<div class="infoblock__item infoblock__item--address">
									<? the_field('address', 'option'); ?>
								</div>
								<div class="infoblock__item infoblock__item--phone">
									<? the_field('phone', 'option'); ?>
								</div>
								<div class="infoblock__item infoblock__item--mail">
									<a href="mailto:<? the_field('mail', 'option'); ?>"><? the_field('mail', 'option'); ?></a>
								</div>
								<div class="social">
									<a href="<? the_field('facebook', 'option'); ?>" target="_blank" class="social__item social__item--fb"></a>
									<a href="<? the_field('instagram', 'option'); ?>" target="_blank" class="social__item social__item--insta"></a>
									<a href="<? the_field('twitter', 'option'); ?>" target="_blank" class="social__item social__item--tw"></a>
				        </div>
							</div>
						</div>
					</div>

					<div id="map"></div>

				</section>
				<script>
					<? $gmlat = get_field('index_map_lat');
					if( !empty($gmlat) ): ?>
						var gmlat = <? the_field('index_map_lat'); ?>;
					<? else : ?>
						var gmlat = 55.750023;
					<?php endif; ?>

				  	<? $gmlng = get_field('index_map_lng');
					if( !empty($gmlng) ): ?>
						var gmlng = <? the_field('index_map_lng'); ?>;
					<? else : ?>
						var gmlng = 37.624876;
					<?php endif; ?>

					
					<? $gmtitle = get_field('index_map_title');
					if( !empty($gmtitle) ): ?>
						var gmtitle = "<? the_field('index_map_title'); ?>";
					<? else : ?>
						var gmtitle = "";
					<?php endif; ?>

					<? $image = get_field('index_map_img');
					if( !empty($image) ): ?>
						var gmicon = "<?php echo $image['url']; ?>";
					<? else : ?>
						var gmicon = "";
					<?php endif; ?>

					<? $gmcontent = get_field('index_map_text');
					if( !empty($gmcontent) ): ?>
						var gmcontent = "<p><? the_field('index_map_text'); ?></p>";
					<? else : ?>
						var gmcontent = "";
					<?php endif; ?>
				</script>

<? get_footer(); ?>