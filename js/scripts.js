// Get the signup <form> element and add the validation function listener.
signup_form = document.getElementById('form__signup');
signup_form.addEventListener('submit', validate_form);


// Validate the form fields then either add the .has-error classe to the relevant elements or submit the form.
function validate_form(e){

    // For testing purposes, the form will never submit.
    e.preventDefault();

    // Initialize up some variables.
    var errors = []; // Store the IDs of the <input>s that do not validate.
    var error_div = document.getElementById('form-error'); // The element that contains the main slide-down error message.
    var field_username = document.getElementById('signup__username'); // The username <input>
    var field_password = document.getElementById('signup__password'); // The password <input>
    var form_is_valid = false; // Whether or not the form validates, will use as a return value at the end of the function.

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

        // Prevent form submit, would normally have this here if the form was functional.
        //e.preventDefault();

    } else {
        // No errors, so set this to true if you want the form to submit.
        //form_is_valid = true;
    }


    return form_is_valid;
}



// Functions that modify classes
// Modified these from the examples on http://youmightnotneedjquery.com/, so they should be at least IE9+ compatible, if not IE8+ compatible.
function addErrorClass(element){
    var className = 'has-error';

    if( element.classList ){
        element.classList.add(className);
    } else {
        element.className += ' ' + className;
    }
}

function removeClasses(element){
    var className = 'has-error';

    if (element.classList) {
        element.classList.remove(className);
    } else {
        element.className = '';
    }
}

function toggleActive(element){
    var className = 'active-nav';

    if (element.classList) {
        element.classList.toggle(className);
    } else {
        var classes = element.className.split(' ');
        var existingIndex = classes.indexOf(className);

        if (existingIndex >= 0)
        classes.splice(existingIndex, 1);
        else
        classes.push(className);

        element.className = classes.join(' ');
    }
}


// Initialize the padding-top for <body> and the top offset for the navigation, based on the height of the <header>.
var header = document.querySelectorAll('header');
//console.log( header[0].offsetHeight );

document.body.style.paddingTop = header[0].offsetHeight + 'px';

// NAVIGATION
menu_button = document.getElementById('nav__toggle');
//console.log(menu_button);
nav_element = document.getElementById('nav__main');
//console.log(nav_element);

menu_button.addEventListener('click', toggle_nav);
function toggle_nav(){
    //toggleActive(nav_element);
    toggleActive(document.body);

    // Get the difference in width between the navigation and the menu button.
    width_diff = nav_element.offsetWidth - menu_button.offsetWidth;
    var hamburger = document.querySelectorAll('#nav__toggle .icon-hamburger');
    //console.log(hamburger);
    // Use that difference as the margin-left for the hamburger icon. This pushes the word 'Menu' to the left without moving the hamburger. Adding the width difference should make the nav and the button appear to be at equal widths. Using calc() for an additional .5em to account for the difference in padding between the menu items and the button.
    hamburger[0].style.marginLeft = 'calc('+width_diff+'px + .5em)';
}

// Password field toggle
// click on the eye icon to toggle the password field between type='password' and type='text'.

// Get the eye icon <a> element and add the listener function to it.
pw_toggle = document.getElementById('signup__password--toggle');
pw_toggle.addEventListener('click', toggle_pw_field);

// Toggle the field type back and forth.
function toggle_pw_field(e){
    e.preventDefault();

    var pw_field = document.getElementById('signup__password');
    if( pw_field.type=='password' ){
        pw_field.type = 'text';

    } else {
        pw_field.type = 'password';
    }

    return false;
}
