<?/*Файл хранит меню*/
function register_tsl_menus(){
	register_nav_menus(
		array(
			'main-menu' => 'Основное меню', 
		)
	);
}
if (function_exists('register_nav_menus')){
	add_action( 'init', 'register_tsl_menus' );
}
?>