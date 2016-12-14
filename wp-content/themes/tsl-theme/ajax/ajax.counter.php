<?
//AJAX: Остправить сообщение
add_action('wp_ajax_client_counter_action', 'tsl_client_counter');  
add_action('wp_ajax_nopriv_client_counter_action', 'tsl_client_counter');

function tsl_client_counter(){
	$result = get_field('client_counter', "options");
	$result = json_encode($result);
	echo $result;
	die();
}


?>