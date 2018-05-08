$(document).ready(function () {
  $('#add-color').on('click', function () {
    const color = $('#color').val();
    const $swatch = $('<div />').addClass('swatch').css('background-color', color);
    $swatch.appendTo('#palette');
  });

  // Event delegation: attach event listeners for elements not yet present
  $('#palette').on('click', '.swatch', function () {
    $('.selected').removeClass('selected'); // Unselecting all previous selections.
    $(this).addClass('selected');
  });

  // Event delegation: for performance, a single event handler instead of 10_000
  $('#canvas').on('mouseover', '.pixel', function () {
    const color = $('.selected').css('background-color');
    $(this).css('background-color', color);
  });
});
