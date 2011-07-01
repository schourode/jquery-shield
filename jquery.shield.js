/*!
* jQuery.shield() plugin
* Copyright 2011, jsr@malamute.dk
* Dual licensed under the MIT or GPL Version 2 licenses.
*/

/*global jQuery*/

(function ($) {
    'use strict';

    $.fn.shield = function (className) {
        return $('<div>').addClass(className || 'shield').css({
            'position': 'absolute',
            'width': this.outerWidth(),
            'height': this.outerHeight(),
            'left': this.position().left,
            'top': this.position().top
        }).insertAfter(this);
    };
})(jQuery);
