$(document).ready(function () {
  setInterval(function () {
    // Fetch a brother via AJAX
    $.get('/brother').done(function (b) {
      $('#brother').text( b );
    });
  }, 4000);
});
