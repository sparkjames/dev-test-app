//console.log(document);
//document.querySelectorAll('.my #awesome selector');

signup_form = document.getElementById('form__signup');
//console.log(signup_form);

signup_form.addEventListener('submit', validate_form);
function validate_form(e){
    console.log(e);
    //alert('ohai');

    var errors = [];
    var field_username = document.getElementById('signup__username');
    var field_password = document.getElementById('signup__password');
    var form_is_valid = false;

    // Password requirements - At least 6 characters, at least one capital letter, and at least one non-alphanumeric character.
    var pattern = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/

    // Make sure username field isn't blank
    if( field_username.value.length <= 0 ){
        errors.push('signup__username');
    }

    // Make sure password field isn't blank...
    if( field_password.value.length <= 0 ){
        errors.push('signup__password');

    // ... otherwise make sure it matches the password strength requirements.
    } else if( field_password.value.search(pattern) == -1 ) {
        errors.push('signup__password');
    }


    // Remove any error classes that may have already been added by an invalid form submission.
    if (field_username.parentNode.classList) {
        field_username.parentNode.classList.remove('has-error');
    } else {
        field_username.parentNode.className = '';
    }

    if (field_password.parentNode.classList) {
        field_password.parentNode.classList.remove('has-error');
    } else {
        field_password.parentNode.className = '';
    }


    // At this point if the errors array has a length, that means there are validation errors. Otherwise if it's empty, the form validated fine.
    //console.log(errors);
    if( errors.length > 0 ){
        var field_username_parent = field_username.parentNode;
        var field_password_parent = field_password.parentNode;

        for(i=0; i<errors.length; i++){
            var this_field_parent = document.getElementById(errors[i]).parentNode;

            if( this_field_parent.classList ){
                this_field_parent.classList.add('has-error');
            } else {
                this_field_parent.className += ' ' + className;
            }

        }

        e.preventDefault();

    } else {
        form_is_valid = true;
    }

    //console.log(form_is_valid);
    return form_is_valid;
}
