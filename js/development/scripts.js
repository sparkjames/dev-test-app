//console.log(document);
//document.querySelectorAll('.my #awesome selector');

signup_form = document.getElementById('form__signup');
//console.log(signup_form);

signup_form.addEventListener('submit', validate_form);
function validate_form(e){
    console.log(e);
    //alert('ohai');

    var errors = [];
    var error_div = document.getElementById('form-error');
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
    removeClasses(field_username.parentNode);
    removeClasses(field_password.parentNode);
    removeClasses(error_div);


    // At this point if the errors array has a length, that means there are validation errors. Otherwise if it's empty, the form validated fine.
    //console.log(errors);
    if( errors.length > 0 ){
        // Go through each error, use the values as the ID selector, and get each form field's parent element (should be a <p>).
        for(i=0; i<errors.length; i++){
            var this_field_parent = document.getElementById(errors[i]).parentNode;

            // Add the 'has-error' class to the parent element.
            addErrorClass(this_field_parent);

        }

        // Now just add the 'has-error' class to the main error message <div>.
        addErrorClass(error_div);

        // Prevent form submit
        e.preventDefault();

    } else {
        form_is_valid = true;
    }

    //console.log(form_is_valid);
    return form_is_valid;
}




function addErrorClass(element){
    if( element.classList ){
        element.classList.add('has-error');
    } else {
        element.className += ' ' + className;
    }
}

function removeClasses(element){
    if (element.classList) {
        element.classList.remove('has-error');
    } else {
        element.className = '';
    }
}
