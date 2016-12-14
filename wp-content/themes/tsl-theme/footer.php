
	<?php wp_footer(); ?>
	<script>
		$(document).ready(function() {
			<? $objPost = wp_count_posts('product'); 
			$allCount = $objPost->publish; ?>
		var catalog = new TSL_Catalog(<?=get_field('catalog_count','option'); ?>, <?=$allCount ?>, SimpleBasket);
	});
	</script>
	</body>
</html>