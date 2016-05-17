// NAVIGATION

// Save the menu button (with the hamburger) and the main navigation <nav> element to variables so I can toggle the menu on and off.
menu_button = document.getElementById('nav__toggle');
//console.log(menu_button);
nav_element = document.getElementById('nav__main');
//console.log(nav_element);

menu_button.addEventListener('click', toggle_nav);
function toggle_nav(){
    // Toggle the active class on the <body> so we only have to add a class to one thing. CSS can handle the transition animations.
    toggleActive(document.body);

    // Get the difference in width between the navigation and the menu button.
    width_diff = nav_element.offsetWidth - menu_button.offsetWidth;
    var hamburger = document.querySelectorAll('#nav__toggle .icon-hamburger');
    //console.log(hamburger);
    
    // Use that difference as the margin-left for the hamburger icon. This pushes the word 'Menu' to the left without moving the hamburger. Adding the width difference should make the nav and the button appear to be at equal widths. Using calc() for an additional .5em to account for the difference in padding between the menu items and the button.
    hamburger[0].style.marginLeft = 'calc('+width_diff+'px + .5em)';
}
