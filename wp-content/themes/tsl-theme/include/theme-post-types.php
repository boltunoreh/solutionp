<?/*Создание пользовательских типов записей и таксономий*/

//Устанавливаем ограничение на количесво ревизий для записей
function tsl_revisions_to_keep( $revisions, $post ) {
    if ( 'page' == $post->post_type|| 'news' == $post->post_type )
        return 3;
    else
        return 0;
}
add_filter( 'wp_revisions_to_keep', 'tsl_revisions_to_keep', 10, 2 );

//Создаем типы записей и таксономии
add_action('init', 'tsl_post_type_register');
function tsl_post_type_register() {
	///////////////////////////////////////Регистрируем тип записей Новости///////////////////////////////////////
	register_post_type('news', array(
		'labels' => array(
			'name' => 'Новости',//основное название для типа записи 
			'singular_name' => 'Новость',// название для одной записи этого типа
			'add_new'=>'Добавить новость',// для добавления новой записи
			'all_items' => 'Все новости',// для всех записей
			'add_new_item' => 'Добавить новость',// заголовок у вновь создаваемой записи в админ-панели.
			'edit_item' => 'Редактировать новость',// для редактирования типа записи
			'new_item' => 'Добавить новость',// текст новой записи  
			'view_item' => 'Просмотреть новость',// для просмотра записи этого типа.  
			'search_items' => 'Поиск новостей', // для поиска по этим типам записи 
			'not_found' => 'Ничего не найдено', // если в результате поиска ничего не было найдень  
			'not_found_in_trash' => 'В корзине ничего не найдено', // если не было найдено в корзине  
			'parent_item_colon' => '', // для родительских типов. для древовидных типов  
			'menu_name' => 'Новости'// название меню 
		),	
		'public' => true,
		'exclude_from_search' => false,
		'show_ui' => true,
		'show_in_nav_menus' => true,
		'publicly_queryable' => true,
		'query_var' => true,
		'capability_type' => 'post',
		'hierarchical' => false,
		'has_archive' => true,
		'rewrite' => array("slug" => "news"),
		'menu_position' => 20,
		'supports' => array('title', 'thumbnail', 'editor')
	));

	///////////////////////////////////////Регистрируем таксономию Рубрики новостей///////////////////////////////////////
	register_taxonomy('news-sections', 'news', array(
		'labels' => array(
			'name' => 'Рубрики',
			'singular_name' => 'Рубрика',
			'all_items' => 'Все рубрики',
			'add_new_item' => 'Добавить новую рубрику',
			'edit_item' => 'Редактировать рубрику',
			'new_item' => 'Новая рубрика',
			'view_item' => 'Просмотреть рубрику',
			'search_items' => 'Поиск рубрик',
			'menu_name' => 'Рубрики'
		),
		'show_in_nav_menus' => true,
		'hierarchical' => true,
		'rewrite' => array('slug' => 'news-sections')
	));


}
?>