$(function(){
  $('#hide-css').remove();
  $('.js-hide').hide();
  
  $('input[type=submit], button, a.button').click(function(){
    $(this).parents(".example:first").find('div.js-hide').slideToggle('fast');
    return false;
  });
});
