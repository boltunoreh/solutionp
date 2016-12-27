<?/*Файл функций*/
/////////////////////////////////////// Определяем константы для путей ///////////////////////////////////////
define("tmpl_dir", get_template_directory_uri() . '/');
define("tmpl_css", get_template_directory_uri(). '/assets/css/');
define("tmpl_js", get_template_directory_uri(). '/assets/js/');
define("tmpl_img", get_template_directory_uri(). '/assets/img/');
define("tmpl_inc", get_template_directory() . '/include/');
define("tmpl_ajax", get_template_directory() . '/ajax/');
define("tmpl_class", get_template_directory() . '/classes/');

/////////////////////////////////////// Подключаем дополнительные функции ///////////////////////////////////////
// Функции темы
require_once(tmpl_inc . 'theme-functions.php');

require_once(tmpl_class . 'tsl-catalog/class.catalog.php');

// Подключаем Sidebars
//require_once(tmpl_inc . 'theme-sidebars.php');

// Подключаем Custom Post Types
//require_once(tmpl_inc . 'theme-post-types.php');

// Подключаем post screens
//require_once(tmpl_inc . 'theme-рosts-screens.php');

// Подключаем theme-taxonomy-meta
//require_once(tmpl_inc . 'theme-taxonomy-meta.php');

// Прикладные функции
//require_once(tmpl_inc . 'custom-functions.php');

// Настройки темы
//require_once(tmpl_inc . 'theme-options.php');

// Меню
require_once(tmpl_inc . 'theme-menu.php');

// Подключаем модификацию админки
//require_once(tmpl_inc . 'theme-clean-admin.php');

// Подключаем виджеты
//require_once(tmpl_inc . 'theme-widgets.php');

/////////////////////////////////////// Подключаем ajax функции ///////////////////////////////////////
require_once(tmpl_ajax . 'ajax.counter.php');

/////////////////////////////////////// Подключаем стили ///////////////////////////////////////
add_action('wp_enqueue_scripts','tsl_enqueue_fe_styles');
function tsl_enqueue_fe_styles() {
	wp_enqueue_style('css-general', tmpl_css.'style.css');
	wp_enqueue_style('css-fullscreen', tmpl_css.'jquery.fullPage.css');
}

///////////////////////////////////////Все, что хотим добавить в Header///////////////////////////
add_action('wp_head', 'tsl_wp_header');
function tsl_wp_header(){
	echo '<link rel="Shortcut Icon" href="'.tmpl_dir.'favicon.ico" type="image/x-icon" />';
	echo '<link rel="icon" type="image/png" href="'.tmpl_img.'favicon-32x32.png" sizes="32x32"/>';
	echo '<link rel="icon" type="image/png" href="'.tmpl_img.'favicon-16x16.png" sizes="16x16"/>';
	echo '<link rel="apple-touch-icon-precomposed" sizes="152x152" href="'.tmpl_img.'apple-touch-icon-152x152.png"/>';
}

/////////////////////////////////////// Подключаем js-скрипты ///////////////////////////////////////
add_action('wp_enqueue_scripts', 'tsl_enqueue_fe_scripts');
function tsl_enqueue_fe_scripts() {
	wp_localize_script('jquery.min', 'myajax', array('url' => admin_url('admin-ajax.php'))); //установка глобальной переменной javascript — ajaxurl для использования ее во фронтэнде
	wp_enqueue_script('jquery.min', tmpl_js.'jquery.min.js', array(), false, true);
	wp_enqueue_script('scripts', tmpl_js.'scripts.js', array('googlemap'), false, true);
	wp_enqueue_script('googlemap', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAQ0PT-P1EWEpIGfPeDHhgjfOWWe47I56g', array(), false, false);
	wp_enqueue_script('fullscreen', tmpl_js.'jquery.fullPage.js', array(), false, true);
}



/////////////////////////////////////// Меняем логотип на входе в админку ///////////////////////////////////////
function custom_login_logo(){
   echo '
   <style type="text/css">
        #login h1 a { background: url('. get_bloginfo('template_directory') .'/images/admin-logo.png) no-repeat 0 0 !important; }
    </style>';
}
add_action('login_head', 'custom_login_logo');
add_filter( 'login_headertitle', create_function('', 'return false;') ); //этот фильтр убирает title при наведении на логотип
add_filter( 'login_headerurl', create_function('', 'return get_home_url();') );//этот фильтр меняет ссылку с wordpress.org на ваш сайт

//Создаем типы записей и таксономии
add_action('init', 'tsl_post_type_register');
function tsl_post_type_register() {
	///////////////////////////////////////Регистрируем тип записей Новости///////////////////////////////////////
	register_post_type('product', array(
		'labels' => array(
			'name' => 'Товары',//основное название для типа записи 
			'singular_name' => 'Позиция',// название для одной записи этого типа
			'add_new'=>'Добавить позицию',// для добавления новой записи
			'all_items' => 'Все позиции',// для всех записей
			'add_new_item' => 'Добавить позицию',// заголовок у вновь создаваемой записи в админ-панели.
			'edit_item' => 'Редактировать позицию',// для редактирования типа записи
			'new_item' => 'Добавить позицию',// текст новой записи  
			'view_item' => 'Просмотреть позицию',// для просмотра записи этого типа.  
			'search_items' => 'Поиск позиций', // для поиска по этим типам записи 
			'not_found' => 'Ничего не найдено', // если в результате поиска ничего не было найдень  
			'not_found_in_trash' => 'В корзине ничего не найдено', // если не было найдено в корзине  
			'parent_item_colon' => '', // для родительских типов. для древовидных типов  
			'menu_name' => 'Каталог'// название меню 
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
		'rewrite' => array("slug" => "prices"),
		'menu_position' => 20,
		'supports' => array('title', 'thumbnail', 'editor', 'custom-fields')
	));

	///////////////////////////////////////Регистрируем таксономию Рубрики новостей///////////////////////////////////////
	register_taxonomy('position', 'product', array(
		'labels' => array(
			'name' => 'Категории',
			'singular_name' => 'Категория',
			'all_items' => 'Все категории',
			'add_new_item' => 'Добавить новую категорию',
			'edit_item' => 'Редактировать категорию',
			'new_item' => 'Новая категория',
			'view_item' => 'Просмотреть категорию',
			'search_items' => 'Поиск категорий',
			'menu_name' => 'Категории'
		),
		'show_in_nav_menus' => true,
		'hierarchical' => true,
		'rewrite' => array('slug' => 'position')
	));
}

//BOLTUN_OREH
function get_assets_dir()
{
	$assets_dir = get_stylesheet_directory_uri();
	$assets_dir .= '/assets';
	return $assets_dir;
}

?>
