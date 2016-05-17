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
