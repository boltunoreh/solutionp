<?php

//Добавляем в галлерею rel='gallery'
add_filter( 'wp_get_attachment_link' , 'add_lighbox_rel' );
function add_lighbox_rel( $attachment_link ) {
	if( strpos( $attachment_link , 'a href') != false && strpos( $attachment_link , 'img') != false ){
		$attachment_link = str_replace( 'a href' , 'a rel="gallery" href' , $attachment_link );
	}
	return $attachment_link;
}


//Регистрируем размер изображения
if ( function_exists( 'add_image_size' ) ) {
	add_image_size( 'slider', 1920, 99999, array( 'center', 'center' )); 	
	add_image_size( 'work', 1180, 450, array( 'center', 'center' )); 	
	add_image_size( 'fullscreen', 1920, 999999, false); 	
}
//Устанавливаем другой размер миниатюры в галерее
function tsl_gallery_atts( $out, $pairs, $atts ) {  
    $atts = shortcode_atts( array(
        'size' => 'news-thumb',
         ), $atts );
    $out['size'] = $atts['size'];
    return $out;
}
add_filter( 'shortcode_atts_gallery', 'tsl_gallery_atts', 10, 3 );

//Пагинация
function tsl_pagination($pages = '', $range = 2){  
     $showitems = ($range * 2)+1;  
     global $paged;    
	 if (get_query_var('paged')) {
		 $paged = get_query_var('paged');
	 } elseif (get_query_var('page')) {
		 $paged = get_query_var('page');
	 } else {
		 $paged = 1;
	 }

     if($pages == '') {
         global $wp_query;
         $pages = $wp_query->max_num_pages;
         if(!$pages){
             $pages = 1;
         }
     }   
	
     if(1 != $pages){
		echo '<div class="pagination">';
        if($paged > 1 && $showitems < $pages) echo "<a class='p_prev' href='".get_pagenum_link($paged - 1)."'>← <span>Новее</span></a>";
        for ($i=1; $i <= $pages; $i++){
            if (1 != $pages &&(!($i >= $paged+$range+1 || $i <= $paged-$range-1) || $pages <= $showitems)){
                 echo ($paged == $i)? "<strong>".$i."</strong>":"<a href='".get_pagenum_link($i)."' class='inactive' ><span>".$i."</span></a>";
            }
        }
        if ($paged < $pages && $showitems < $pages) echo "<a class='p_next' href='".get_pagenum_link($paged + 1)."'><span>Старее</span> →</a>";  
        echo "</div>\n";
     }
}

/* Обрезка текста - excerpt 
maxchar = количество символов. 
text = какой текст обрезать (по умолчанию берется excerpt поста, если его нету, то content, если есть тег <!--more-->, то maxchar игнорируется и берется все, что до него, с сохранением HTML тегов ) 
save_format = Сохранять перенос строк или нет. По умолчанию сохраняется. Если в параметр указать определенные теги, то они НЕ будут вырезаться из обрезанного текста (пример: save_format=<strong><a> ) 
echo = выводить на экран или возвращать (return) для обработки. 
П.с. Шоткоды вырезаются. Минимальное значение maxchar может быть 22. 
*/  
function kama_excerpt($args=''){  
    global $post;  
        parse_str($args, $i);  
        $maxchar     = isset($i['maxchar']) ?  (int)trim($i['maxchar'])     : 350;  
        $text        = isset($i['text']) ?          trim($i['text'])        : '';  
        $save_format = isset($i['save_format']) ?   trim($i['save_format'])         : false;  
        $echo        = isset($i['echo']) ?          false                   : true;  
  
    if (!$text){  
        $out = $post->post_excerpt ? $post->post_excerpt : $post->post_content;  
        $out = preg_replace ("!\[/?.*\]!U", '', $out ); //убираем шоткоды, например:[singlepic id=3]  
        // для тега <!--more-->  
        if( !$post->post_excerpt && strpos($post->post_content, '<!--more-->') ){  
            preg_match ('/(.*)<!--more-->/s', $out, $match);  
            $out = str_replace("\r", '', trim($match[1], "\n"));  
            $out = preg_replace( "!\n\n+!s", "</p><p>", $out );  
            $out = "<p>". str_replace( "\n", "<br />", $out ) ."</p>";  
            if ($echo)  
                return print $out;  
            return $out;  
        }  
    }  
  
    $out = $text.$out;  
    if (!$post->post_excerpt)  
        $out = strip_tags($out, $save_format);  
  
    if ( iconv_strlen($out, 'utf-8') > $maxchar ){  
        $out = iconv_substr( $out, 0, $maxchar, 'utf-8' );  
        $out = preg_replace('@(.*)\s[^\s]*$@s', '\\1 ...', $out); //убираем последнее слово, ибо оно в 99% случаев неполное  
    }  
  
    if($save_format){  
        $out = str_replace( "\r", '', $out );  
        $out = preg_replace( "!\n\n+!", "</p><p>", $out );  
        $out = "<p>". str_replace ( "\n", "<br />", trim($out) ) ."</p>";  
    }  
  
    if($echo) return print $out;  
    return $out;  
}  

//Включаем поддержку миниатюр
add_theme_support('post-thumbnails');

//Переопределяем шорткод галереи
add_shortcode('gallery', 'tsl_gallery_shortcode');    
function tsl_gallery_shortcode($attr) {
    $post = get_post();
	static $instance = 0;
	$instance++;
	if ( ! empty( $attr['ids'] ) ) {
		if ( empty( $attr['orderby'] ) )
			$attr['orderby'] = 'post__in';
		$attr['include'] = $attr['ids'];
	}
	$output = apply_filters('post_gallery', '', $attr);
	if ( $output != '' )
		return $output;
	if ( isset( $attr['orderby'] ) ) {
		$attr['orderby'] = sanitize_sql_orderby( $attr['orderby'] );
		if ( !$attr['orderby'] )
			unset( $attr['orderby'] );
	}

	extract(shortcode_atts(array(
		'order'      => 'ASC',
		'orderby'    => 'menu_order ID',
		'id'         => $post->ID,
		'itemtag'    => 'div',
		'icontag'    => '',
		'captiontag' => 'span',
		'columns'    => 3,
		'size'       => 'news-thumb',
		'include'    => '',
		'exclude'    => ''
	), $attr));

	$id = intval($id);
	if ( 'RAND' == $order )
		$orderby = 'none';

	if ( !empty($include) ) {
		$_attachments = get_posts( array('include' => $include, 'post_status' => 'inherit', 'post_type' => 'attachment', 'post_mime_type' => 'image', 'order' => $order, 'orderby' => $orderby) );

		$attachments = array();
		foreach ( $_attachments as $key => $val ) {
			$attachments[$val->ID] = $_attachments[$key];
		}
	} elseif ( !empty($exclude) ) {
		$attachments = get_children( array('post_parent' => $id, 'exclude' => $exclude, 'post_status' => 'inherit', 'post_type' => 'attachment', 'post_mime_type' => 'image', 'order' => $order, 'orderby' => $orderby) );
	} else {
		$attachments = get_children( array('post_parent' => $id, 'post_status' => 'inherit', 'post_type' => 'attachment', 'post_mime_type' => 'image', 'order' => $order, 'orderby' => $orderby) );
	}

	if ( empty($attachments) )
		return '';

	if ( is_feed() ) {
		$output = "\n";
		foreach ( $attachments as $att_id => $attachment )
			$output .= wp_get_attachment_link($att_id, $size, true) . "\n";
		return $output;
	}

	$itemtag = tag_escape($itemtag);
	$captiontag = tag_escape($captiontag);

	$size_class = sanitize_html_class( $size );
	$output = "
	<div class='slider-four'>
		<div class='slider-four-slides'>";





	foreach ( $attachments as $id => $attachment ) {
		$link = isset($attr['link']) && 'file' == $attr['link'] ? wp_get_attachment_link($id, $size, false, false) : wp_get_attachment_link($id, $size, true, false);
		$output .= "<{$itemtag} class='slider-four-slide'>";
		$output .= "$link";
		if ( $captiontag && trim($attachment->post_excerpt) ) {
			$output .= "
				<{$captiontag} class='wp-caption-text gallery-caption'>
				" . wptexturize($attachment->post_excerpt) . "
				</{$captiontag}>";
		}
		$output .= "</{$itemtag}>";
	}
	$output .= "
		</div>
		<div class='slider-four-prev'></div>
		<div class='slider-four-next'></div>
	</div>\n";

	 return $output;
	}



// Удаляем margin-top у HTML
add_action('get_header', 'true_remove_default_css');
function true_remove_default_css() {
	remove_action('wp_head', '_admin_bar_bump_cb');
}


//Переименовываем страницу опций
function my_acf_options_page_settings( $settings )
{
	$settings['title'] = 'Настройки сайта';
	return $settings;
}
 
add_filter('acf/options_page/settings', 'my_acf_options_page_settings');

?>
