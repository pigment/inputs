$(function(){
  $('#hide-css').remove();
  $('.js-hide').hide();
  
  $('input[type=submit], input[type=reset], button, .button, input[type=text], textarea').click(function(){
    showMarkup(this);
    return false;
  });
  
  function showMarkup(el) {
    $(el).parents(".example:first").find('div.js-hide').slideToggle('fast');
  }
});
