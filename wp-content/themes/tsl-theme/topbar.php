<section class="topbar">
	<div class="row clearfix">
		<div class="menu-btn"></div>

		<?php

				$image = get_field('main_menu_logo');

		if( !empty($image) ): ?>

			<div class="logo"><img src="<?php echo $image['url']; ?>" width="39" height="44" alt="eCabina"></div>

		<?php endif; ?>

		<a href="javascript://" class="btn contact-link"><span class="long">Связаться с нами</span><span class="short">Связаться</span><span class="mobile">

			<?php

					$image = get_field('main_menu_feedback');

			if( !empty($image) ): ?>

				<img src="<?php echo $image['url']; ?>" alt="" width="32" height="22"/>

			<?php endif; ?>`

		</span></a>

		<nav>
			<ul>
				<li><a href="#about"><span>О нас</span></a></li>
				<li><a href="#slider"><span>Особенности</span></a></li>
				<li><a href="#placement"><span>Размещение</span></a></li>
				<li><a href="#process"><span>Процесс</span></a></li>
				<li><a href="#partners"><span>Партнерам</span></a></li>
				<li><a href="#gallery"><span>Галерея</span></a></li>
		</ul>
		</nav>
	</div>
	<div class="form">
		<div class="form-outline">
			<div class="row clearfix">
				<div class="form-container">
					<div class="form-close"></div>
					<?php

					$image = get_field('main_menu_form_ico');

					if( !empty($image) ): ?>

						<i class="title-ico" style="background-image: url('<?php echo $image['url']; ?>'); background-size: 50px 50px; width: 50px; height: 50px; margin: 0 auto 30px"></i>

					<?php endif; ?>
					<h2>Свяжитесь с нами</h2>
					<div class="form-contact">
						<ul>
							<li><a href="mailto:<?php the_field('main_menu_mail'); ?>"><?php the_field('main_menu_mail'); ?></a></li>
							<li><?php the_field('main_menu_phone'); ?></li>
						</ul>
					</div>
					<div class="social">
						<a href="<?php the_field('main_menu_facebook'); ?>" class="fb"><span></span></a>
						<a href="<?php the_field('main_menu_instagram'); ?>" class="insta"><span></span></a>
						<a href="<?php the_field('main_menu_vk'); ?>" class="vk"><span></span></a>
					</div>

					<div class="continer">
							<?php echo do_shortcode( '[contact-form-7 id="95" title="Форма обратной связи"]' ); ?>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
