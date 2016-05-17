// NAVIGATION
menu_button = document.getElementById('nav__toggle');
console.log(menu_button);
nav_element = document.getElementById('nav__main');
console.log(nav_element);

menu_button.addEventListener('click', toggle_nav);
function toggle_nav(){
    //toggleActive(nav_element);
    toggleActive(document.body);

    // Get the difference in width between the navigation and the menu button.
    width_diff = nav_element.offsetWidth - menu_button.offsetWidth;
    var hamburger = document.querySelectorAll('#nav__toggle .icon-hamburger');
    console.log(hamburger);
    // Use that difference as the margin-left for the hamburger icon. This pushes the word 'Menu' to the left without moving the hamburger. Adding the width difference should make the nav and the button appear to be at equal widths. Using calc() for an additional .5em to account for the difference in padding between the menu items and the button.
    hamburger[0].style.marginLeft = 'calc('+width_diff+'px + .5em)';
}
