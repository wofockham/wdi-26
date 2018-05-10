$(document).ready(function () {
  const $bill = $('.bill-js');
  const $body = $('body');

  $(window).on('scroll', function () {
    const scrollTop = $(window).scrollTop();
    $bill.css('background-position-y', -scrollTop * 0.75);
    $body.css('background-position-y', -scrollTop / 3);
  });

  $(window).on('mousemove', function (event) {
    const x = event.pageX;
    const y = event.pageY;

    const size = Math.random() * 10;

    const $bubble = $('<div class="bubble"></div>').css({
      left: x,
      top: y,
      width: size + 'em',
      height: size + 'em'
    });

    $bubble.appendTo( $body );

    $bubble.animate({top: -200}, 2000, function () {
      $bubble.remove(); // This callback runs when the animation is complete.
    });

  });

});
