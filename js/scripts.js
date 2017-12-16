// Attach click to dropdown menu items
function attachClick() {
  $('.dropdown').off('click', 'li').on('click', 'li', function() {
    $('.hero').css('height', '0');
    $('.gallery').css('margin-top', '70px');
    showOnly($(this).text());
  });
}

// Only show results from clicked dropdown menu category
function showOnly(category) {
  if (category === 'Home') {
    $('.hero').css('height', '100vh');
    $('.gallery-image').css('display', 'block');
  } else {
    var selection = '.' + category.toLowerCase();
    $('.gallery-image').css('display', 'none');
    $(selection).css('display', 'block');
  }
}

$(function() {
  attachClick();
});
