

function attachClick() {
  $('.dropdown').off('click', 'li').on('click', 'li', function() {
    showOnly($(this).text());
  })
}

function showOnly(category) {
  var selection = '.' + category.toLowerCase();
  $('.gallery-image').css('display', 'none');
  $(selection).css('display', 'block');
}

$(function() {
  attachClick();


});
