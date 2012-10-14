<?php

function contactUs(){

	// Validation
	//if(!$_GET['email']){ return "No email address provided"; }

	// if(!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*$/i", $_GET['email'])) {
	// 	return "Email address is invalid";
	// }

	//require_once('MCAPI.class.php');
	// grab an API Key from http://admin.mailchimp.com/account/api/
	//$api = new MCAPI('a3df07cbb6d8c3d668cec69289d6e319-us2');

	// grab your List's Unique Id by going to http://admin.mailchimp.com/lists/
	// Click the "settings" link for the list - the Unique Id is at the bottom of that page.
	//$list_id = "8eca5d87de";

	//if($api->listSubscribe($list_id, $_GET['email'], '') === true) {
		// It worked!
		//return 'Success! Check your email to confirm sign up.';
	//}else{
		// An error ocurred, return error message
		//return 'Error: ' . $api->errorMessage;
	//}
	if ($_GET['test'] == '3') {
	    $to      = 'info@lightiseverything.com.au, kym@lightiseverything.com.au, brett@lightiseverything.com.au, kirsty@lightiseverything.com.au';
	    $subject = 'Urgent : From lightiseverything.com.au';
	    $stringData = "Name: " . $_GET['name'] . "\r\n";
	    $stringData = $stringData . "Email: " . $_GET['contact-email'] . "\r\n";
	    $stringData = $stringData . "Phone: " . $_GET['phone'] . "\r\n";
	    $stringData = $stringData . "Message: " . $_GET['text'] . "\r\n";
	    $headers = 'From: ' . $_GET['contact-email'] . " \r\n" .
	        'Reply-To: ' . $_GET['contact-email'] . " \r\n" .
	        'X-Mailer: PHP/' . phpversion();

	    mail($to, $subject, $stringData, $headers);

	    return "Cheers! We'll get back to you in a flash.";
	} else {
		return "Error: you ain't no human!";
	}

}

// If being called via ajax, autorun the function
if($_GET['ajax']){ echo contactUs(); }
?>
