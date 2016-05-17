
// Initialize the padding-top for <body> and the top offset for the navigation, based on the height of the <header>.
var header = document.querySelectorAll('header');
//console.log( header[0].offsetHeight );

document.body.style.paddingTop = header[0].offsetHeight + 'px';
