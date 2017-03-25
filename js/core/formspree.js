$(document).on('submit', $('#contact-form'), function(e) {
    var $contactFormWrap = $('.contact-form-wrap');
    var $contactForm = $('#contact-form');
    
	e.preventDefault();
	$contactForm.hide();
	$contactFormWrap.append('<div class="kb-form kb-form--alert kb-form--alert-info uk-animation-fade"><p><i class="fa fa-spinner fa-spin"></i> Sending message</p></div>');
    $contactFormWrap.append('<div class="kb-form kb-form--alert kb-form--alert-success uk-animation-scale"><p>Message sent to Kevin!</div></p>');
	$contactFormWrap.append('<div class="kb-form kb-form--alert kb-form--alert-danger uk-animation-shake"><p>Oops, there was an error!</p><span>Email me at kevinbigelow.design@gmail.com</span></div>');
/*
	$.ajax({
		url: '//formspree.io/kbigelow.design@gmail.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
        	$contactFormWrap.append('<div class="kb-form kb-form--alert kb-form--alert-info uk-animation-fade"><p><i class="fa fa-spinner fa-spin"></i> Sending message</p></div>');
		},
		success: function(data) {
			$contactFormWrap.find('.alert--loading').hide();
			$contactForm.hide();
            $contactFormWrap.append('<div class="kb-form kb-form--alert kb-form--alert-success uk-animation-scale"><p>Message sent to Kevin!</div></p>');
            
		},
		error: function(err) {
			$contactFormWrap.find('.alert--loading').hide();
			$contactForm.hide();
        	$contactFormWrap.append('<div class="kb-form kb-form--alert kb-form--alert-danger uk-animation-shake"><p>Oops, there was an error!</p><span>Email me at kevinbigelow.design@gmail.com</span></div>');
		}
	});
*/
});
