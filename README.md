Inputs
======
A set of nice base styles for buttons and form elements, to aid prototyping web apps and the like. See the [demo here](http://pigment.github.com/inputs/). The aim is to have a stylesheet (+2 for IE/IE6) that can be simply dropped in to your project and work, with minimal adjustments to your markup. It's designed to be modular, so there's need to worry about deleting blocks of selectors/properties you don't need.

Required components (included):

* [Modernizr](http://www.modernizr.com/) for icon styles (Inputs makes use of multiple background images, for minimal markup)
* [CSS3PIE](http://css3pie.com/) for rounded corners, gradients and icons in IE8 and below.

Recommends [HTML5 Boilerplate](http://html5boilerplate.com/).

Quick Start
-----------
### 1. Download using the link above.

### 2. Include the relevant files

i.e. the inputs stylesheet (plus the ie styles), and Modernizr (if you want to use icons):

    <link rel="stylesheet" href="PATH_TO/inputs.css">  
    <!--[if lte IE 8]>  
      <link rel="stylesheet" href="PATH_TO/ie.css">  
    <![endif]-->  
    <!--[if lte IE 6]>  
      <link rel="stylesheet" href="PATH_TO/ie6.css">  
    <![endif]-->
    <script src="PATH_TO/modernizr-1.7.min.js"></script>

### 3. Edit the _behavior_ path in ie.css

Note that this should be relative to the HTML document or absolute from the document root (_not_ relative to the stylesheet). This will enable buttons and input fields to look similar in IE. For more info see the docs on [CSS3PIE](http://css3pie.com/documentation/known-issues/#relative-paths).

### 4. Create a form and enjoy the style!

Code Examples
--------

**Inputs** provides default styles to most form buttons, but there are also some handy classes:

### .button 

    <a href="#" class="button">Anchor Button</a>

### .small.button 

    <a href="#" class="small button">Small Button</a>

### .icon

Icons exist for a set of actions, and can be used with any small button (they looked a bit naff with big buttons). Add the **icon** class to a button, and one of the following: **add**, **remove**, **confirm**, **download**, **upload**, **like**, **dislike**. Check out [the demo](http://pigment.github.com/inputs/) to see these examples for real.

    <a href="#" class="small add icon button">Add Button</a>


### Button Groups
Buttons can be grouped in a list, provided the `<ul>` has the "button group" class, and the first and last `<li>` elements have the classes "first" and "last" respectively:

    <ul class="button-group clearfix">  
        <li class="first"><input class="small" type="submit" value="Nice" /></li>  
        <li><input class="small" type="submit" value="Grouped" /></li>  
        <li class="last"><input class="small" type="submit" value="Buttons" /></li>  
    </ul>

Unfortunately rounded corners wont work for grouped buttons in IE :(

### Locking Textfields

Sometimes it's useful to allow text fields & textareas fill their containers. To lock a text input to its container, wrap it in an element with the classes "lock-x":

    <div class="text-wrapper lock-x">
        <input type="text" placeholder="Text field that fills width" />
    </div>

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
* Add less/sass support?
* Add search button
* Style input[type=search]
* input[type=file] & select styling?
* Dropdown buttons