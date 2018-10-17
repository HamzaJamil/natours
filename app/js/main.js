$(function () {

    var header = $('.header')
    var menuIcon = $('.header__menu-icon')
    var menuContent = $('.header__menu-content')

    menuIcon.click(function () {
        header.toggleClass('header--expanded')
        menuIcon.toggleClass('header__menu-icon--close-x')
        menuContent.toggleClass('header__menu-content--visible')
    });
});