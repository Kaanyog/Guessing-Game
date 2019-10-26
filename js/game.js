// This is the code for our gameplay and how it operates

$('body').on('click', '#change-color', function(){
  $('.color-div').each(function(){
    $(this).css('background-color', $(this).data('color'));
  })
})