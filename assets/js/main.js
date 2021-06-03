"use strict";

$(function() {
    let experienced_img_height = $('.experienced .styleImgBx img').height() / 2;

    $('.experienced .styleImgBx img').css({
        marginTop: -experienced_img_height + 'px'
    });

});