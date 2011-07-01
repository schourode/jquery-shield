This plugin will let you shield/block any element in the DOM from mouse or touch interaction. With a bit of styling on the blocking overlay, the shield can be used as an indicator to the user, that data is being uploaded/downloaded/processed behind the scenes.

# Usage

Getting the shield in place is as simple as:

    var shield = $('#invincible').shield();

Invoking the `shield()` function, an element is created in the DOM. This element is placed next to the target, and is sized and positioned by CSS to lie exactly on top of it. The `shield()` function returns a reference to this new DOM item, allowing you to do whatever you want to it afterwards – e.g. removing it:

    shield.remove();

Often, you will want to give some sort of visual clue that (part of) the DOM is blocked. A simple way to do this, is to add some styling to the shield, preferably via a class name:

    $('#mysterious').shield().addClass('fog');

The `fog` class might have a semitransparent background color, and possibly also a "spinner" attached as a background image. For bonus points, make the shield fade in:

    $('#shy').shield().hide().addClass('silky').fadeIn();

Shield as many elements as you wish with a single function call:

    $('input, button, select, textarea').shield();

# License

Dual licensed under the MIT or GPL Version 2 licenses.
