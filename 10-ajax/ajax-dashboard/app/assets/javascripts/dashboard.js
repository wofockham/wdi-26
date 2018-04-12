$(document).ready(function () {
  setInterval(function () {
    $.getJSON('/info').done(function (info) {
      $('#brother').text( info.brother );
      $('#time').text( info.time );
      $('#uptime').text( info.uptime );
    });

    // $('#brother').load('/brother'); // AJAX
    // $('#time').load('/time');
    // $('#uptime').load('/uptime');

    // $.get('/uptime').done(function (u) {
    //   $('#uptime').text( u );
    // });
  }, 4000);
});
