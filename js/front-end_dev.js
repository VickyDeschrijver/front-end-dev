/*
* dependency: jQuery
*/

$(function() {
    $header     =   $('header');        // header zal classes toegekend krijgen
    $hamburger  =   $('#hamburger');    // hyperlink: hamburger ikoon container
    $ikoon      =   $('#ikoon');        // ikoon in hamburger
    $locksymbol =   $('#loginlock');    // hyperlink: login lock symbol

    // Eventhandlers
    $hamburger.on("click", function() {
        toggleNav();
    });
    $locksymbol.on("click", function() {
        toggleLogin();
    });
});

function toggleLogin() {
//    toggle loginbalk
    if($header.hasClass('hide-login')) {
        // login is nu gesloten => open het
        console.log('login wordt geopend');
        $header.removeClass('hide-login');
        $locksymbol.removeClass('mdi-lock-outline').addClass('mdi-lock-open-outline');        // swap symbooltje naar open lock
    } else {
        // login is nu open => verberg het
        console.log('login wordt gesloten');
        $header.addClass('hide-login');
        $locksymbol.removeClass('mdi-lock-open-outline').addClass('mdi-lock-outline');        // swap symbooltje naar gesloten lock
    }
}

function toggleNav() {
    // toggle menubalk
    if($header.hasClass('hide-menu')) {
        // menu is nu gesloten => open het
        console.log('menu wordt geopend');
        $header.removeClass('hide-menu');
        $ikoon.addClass('menu-active');     // kruisje
    } else {
        // menu is nu open => verberg het
        console.log('menu wordt gesloten');
        $header.addClass('hide-menu');
        $ikoon.removeClass('menu-active')
    }
}