Inputs
======
A set of nice base styles for buttons and form elements, to aid prototyping web apps and the like. See the [demo here](http://pigment.github.com/inputs/).

Quick Start
-----------
Download using the link above. Include the stylesheet, icon file, Modernizr, and CSS3PIE to your project.

    <link rel="stylesheet" href="css/inputs.css">  
    <!--[if lte IE 8]>  
      <link rel="stylesheet" href="css/ie.css">  
    <![endif]-->  
    <!--[if lte IE 6]>  
      <link rel="stylesheet" href="css/ie6.css">  
    <![endif]-->
    <script src="js/modernizr-1.7.min.js"></script>

Create a form and enjoy the style!

**Inputs** is designed to be modular, so there's need to worry about deleting blocks of styles you don't need.

Required components (included):

* [Modernizr](http://www.modernizr.com/) for icon styles (makes use of multiple background images)
* [CSS3PIE](http://css3pie.com/) for rounded corners and icons in IE8 and below.

Recommends [HTML5 Boilerplate](http://html5boilerplate.com/).

Code Examples
--------

**Inputs** provides default styles to most form buttons, but there are also some handy classes:

### .button 

    <a href="#" class="button">Anchor Button</a>

### .small.button 

    <a href="#" class="small button">Small Button</a>

### Icons

Icons exist for a set of actions, and can be used with any small button. Possible icon classes: add, remove, confirm, download, upload. Check out [the demo](http://pigment.github.com/inputs/) to see these examples for real.

    <a href="#" class="small add button">Add Button</a>


### Button Groups
Buttons can be grouped in a list, provided the `<ul>` has the "button group" class, and the first and last `<li>` elements have the classes "first" and "last" respectively:

    <ul class="button-group clearfix">  
        <li class="first"><input class="small" type="submit" value="Nice" /></li>  
        <li><input class="small" type="submit" value="Grouped" /></li>  
        <li class="last"><input class="small" type="submit" value="Buttons" /></li>  
    </ul>

Unfortunately rounded corners wont work for grouped buttons in IE :(

### Locking Textfields

Sometimes it's useful to allow text fields & textareas fill their containers. To lock a text input to its container, wrap it in an element with the classes "text-wrapper lock-x":

    <div class="text-wrapper lock-x">
        <input type="text" placeholder="Text field that fills width" />
    </div>

Locking a textarea to the width and height of its container is a bit more tricky. Check out [the demo](http://pigment.github.com/inputs/) to see an example.

Licenses
--------
Major components:

* Modernizr: MIT/BSD license
* CSS3PIE: Apache/GPL license
* HTML5 Boilerplate: The Unlicense

Everything else: [The Unlicense](http://unlicense.org/) (aka: public domain)

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

To Do:
------
* More IE testing!
* Add Opera gradient support
* Add input[type=button] support
* Remove unnecessary input[type=reset] (from icon selectors)
* Add search button
* Style input[type=search]
* input[type=file] & select styling?
* Dropdown buttons