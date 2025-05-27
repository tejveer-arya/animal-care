function validate_formland() {
	

    var name = document.info_form.uname;

    var email = document.info_form.email;
    
    
    var contact = document.info_form.phone;
    
    var message = document.info_form.message;
    
    
    
    if(!validate_name_inline(name)) {
    
        return false;
    
    }
    
   
    
    
    
    if(!validate_email_inline(email)) {
    
        return false;
    
    }
    
    if(!validate_mobile_inline(contact)) {
    
        return false;
    
    }
  
    
    
    if(!validate_select_inline(message,"Please add your message.")) {
    
        return false;
    
    }

    else{
					
        $.ajax({
                type: "POST",
                url: 'https://tejveer-arya.github.io/animal-care/contactususerenquiry.php',
                data: {  name: name.value,email: email.value,phone: contact.value,message: message.value },
                cache: false,

                success: function (data) {
                var json_str = JSON.parse(data);
                alert(json_str.message);
                document.forms["info_form"].reset();
                return false;

                }
            });
        return false;
    }
    
    }

    $(function() {
		$('input[type="number"]').on("keypress", function (event) {
			// neglect e in number
			if (event.key !== undefined && event.key === "e" || event.key === "-") {
				// Handle the event with KeyboardEvent.key = e
				event.preventDefault();
			}
			if(typeof $(this).attr('maxLength') != "undefined") {
				var maxLength = $(this).attr('maxLength');
				return $(this).val().length < maxLength;
			}
		});
	})
function validate_name_inline(ele_id, msg) {
			removeErr();
			if ($(ele_id).val().trim() == '') {
				var msg1 = typeof msg != 'undefined' ? msg : 'Please enter Name';

				showErr(msg1, ele_id);
				$(ele_id).focus();
				return false;
			}
			var msg2 = 'Only A-Z character allowed';

			var iChars = "~`!@#$%^&*()+=-\_[]1234567890\\\';,./{}|\":<>?";
			for (var i = 0; i < $(ele_id).val().length; i++) {
				if (iChars.indexOf($(ele_id).val().charAt(i)) != -1) {
					showErr(msg2, ele_id);
					$(ele_id).focus();
					return false;
				}
			}
			return true;
		}

		function validate_email_inline(ele_id) {
			removeErr();
			if ($(ele_id).val().trim() == '') {
				showErr('Please enter email id.', ele_id);
				$(ele_id).focus();
				return false;
			}
			if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test($(ele_id).val().trim()))) {
				showErr('Please enter valid email id.', ele_id);
				$(ele_id).focus();
				return false;
			}
			return true;
		}

		function validate_mobile_inline(ele_id) {
			removeErr();
			if ($(ele_id).val().trim() == '') {
				showErr('Please enter contact no.', ele_id);
				$(ele_id).focus();
				return false;
			}
			if (isNaN($(ele_id).val()) || /[\-\.\+]/.test($(ele_id).val()) || !(/^[0-9]*/.test($(ele_id).val()))) {
				showErr('Enter only numeric values.', ele_id);
				$(ele_id).focus();
				return false;
			}
			if ($(ele_id).val().length != 10) {
				showErr("Enter Minimum 10 digits", ele_id);
				$(ele_id).focus();
				return false;
			}
			return true;
		}
		function validate_select_inline(ele_id, msg) {
			removeErr();
			if ($(ele_id).val().trim() == '') {
				var msg1 = typeof msg != 'undefined' ? msg : 'Please select hotel';

				showErr(msg1, ele_id);
				$(ele_id).focus();
				return false;
			}
			return true;
		}
		function validate_required_inline(ele_id, msg) {
			if($(ele_id)[0].localName == "textarea")
				$(ele_id).parent().addClass('err-textarea');

			removeErr();
			if ($(ele_id).val() === null) {
				showErr(msg, ele_id);
				$(ele_id).focus();
				return false;
			}
			if ($(ele_id).val().trim() == '') {
				showErr(msg, ele_id);
				$(ele_id).focus();
				return false;
			}
			return true;
		}

		function showErr(msg, element) {
			$('<span class="error"></span>').appendTo($(element).parent());
			$(element).addClass('invalid')
			.siblings('.error').text(msg);
		}
		function removeErr() {
			$('.error').siblings('input, textarea').removeClass('invalid');
			$('.error').remove();
		}