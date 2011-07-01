/*!
* jQuery.shield() plugin
* Copyright 2011, jsr@malamute.dk
* Dual licensed under the MIT or GPL Version 2 licenses.
*/

/*global jQuery*/

(function ($) {
    'use strict';

    $.fn.shield = function () {
        return $(this).map(function () {
            return $('<div>').css({
                'position': 'absolute',
                'width': $(this).outerWidth(),
                'height': $(this).outerHeight(),
                'left': $(this).position().left,
                'top': $(this).position().top
            }).insertAfter(this).get();
        });
    };
})(jQuery);
