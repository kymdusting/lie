/* Author:

*/


$(document).ready(function(){

	// Run Matt Kersley's jQuery Responsive menu plugin (see plugins.js)
	if ($.fn.mobileMenu) {
		$('ol#id').mobileMenu({
			switchWidth: 768,                   // width (in px to switch at)
			topOptionText: 'Choose a page',     // first option text
			indentString: '&nbsp;&nbsp;&nbsp;'  // string for indenting nested items
		});
	}

	// Run Mathias Bynens jQuery placeholder plugin (see plugins.js)
	if ($.fn.placeholder) {
		$('input, textarea').placeholder();
	}

	// reset any user feedback
	$('.response').html('');

	// set defaults for page display based on #
	$('#home,#about-us,#contact-us,#our-work,#plans-prices').hide();
	var initial = window.location.hash.replace("#", "");
	console.log(initial);
	$("#" + (initial || "home")).show();
	if(initial != '') {
		$('nav li').removeClass('current');
		$('nav a[href="#' + initial + '"]').parent('li').addClass('current');
		if (!$('nav').hasClass('show-me')) {
			$('nav').addClass('show-me');
			$('nav img').css('opacity','0');
			$('nav img').animate({
		    opacity: 1,
		  }, 1000 );
		}
	}

	// navigation control
	$('nav a, section a').bind({
  		click: function() {
  			//reset form inputs
  			$('.response').html('');
  			$('input').val('');
			$('footer input[type="submit"]').val('Sign up');
			$('#contact-us input[type="submit"]').val('Send away!');

			//hide all sections and show the current
  			$('section').hide();
  			var current = $(this).attr('href');
  			$(current).fadeIn();
  			$('nav li').removeClass('current');
  			$(this).parent().addClass('current');
  			if(current === '#home') {
  				$('nav img').animate({
				    opacity: 0,
				  }, 1000, function() {
				    $('nav').removeClass('show-me');
				  });
  			} else {
  				if (!$('nav').hasClass('show-me')) {
	  				$('nav').addClass('show-me');
	  				$('nav img').css('opacity','0');
	  				$('nav img').animate({
					    opacity: 1,
					  }, 1000 );
	  			}
  			}
  		}
	});

	$('footer form').submit(function() {
		// update user interface
		$('footer .response').html('Adding email address...');
		$('footer input[type="submit"]').val('Sending...');

		// Prepare query string and send AJAX request
		$.ajax({
			url: 'site-handlers/store-address.php',
			data: 'ajax=true&email=' + escape($('#email').val()),
			success: function(msg) {
				$('footer .response').html(msg);
				if(msg.substr(0,5) === 'Error') {
					$('footer input[type="submit"]').val('Try again!');
				} else {
  					$('footer input').val('');
					$('footer input[type="submit"]').val('Nice one!');
				}
			}
		});

		return false;
	});

	$('#contact-us form').submit(function() {
		// update user interface
		$('#contact-us .response').html('down the tubes...');
		$('#contact-us form input[type="submit"]').val('Sending...');

		// Prepare query string and send AJAX request
		$.ajax({
			url: 'site-handlers/contact-us.php',
			data: 'ajax=true&name=' + escape($('#name').val()) +
				  '&contact-email=' + escape($('#contact-email').val()) +
				  '&phone=' + escape($('#phone').val()) +
				  '&text=' + escape($('#text').val())
				  ,
			success: function(msg) {
				$('#contact-us .response').html(msg);
				if(msg.substr(0,5) === 'Error') {
					$('footer input[type="submit"]').val('Try again!');
				} else {
  					$('#contact-us input, #contact-us textarea').val('');
					$('#contact-us input[type="submit"]').val('All done!');
				}
			}
		});

		return false;
	});

});







