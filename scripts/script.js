$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('solid', $(this).scrollTop() > $nav.height());
  });
});
$(function () {
  $(document).scroll(function () {
    var $nav = $(".social-fab");
    $nav.toggleClass('visible', $(this).scrollTop() > $nav.height());
  });
});