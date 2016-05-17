
// Initialize the padding-top for <body> based on the height of the <header>.
var header = document.querySelectorAll('header');
//console.log( header[0].offsetHeight );

document.body.style.paddingTop = header[0].offsetHeight + 'px';
