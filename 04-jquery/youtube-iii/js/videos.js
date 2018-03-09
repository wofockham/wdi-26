$(document).ready(function () {
  $('h2').funText(100, 'candy');
  $('a').funText(50, 'rainbow');

  const $links = $( 'a' );

  const thumbnailify = function () {
    let $link = $( this ); // Turn the vanilla DOM node back into a jQuery object.

    let href = $link.attr( 'href' ); // getter
    let thumbnailURL = youtube.generateThumbnailUrl( href );

    // Chaining
    let $thumbnail = $( '<img />' ).attr( 'src', thumbnailURL ); // setter
    $link.prepend( $thumbnail );

    $link.on('click', function (event) {
      event.preventDefault(); // Don't let the browser follow the link.

      const video = $link.attr('href');
      const embedURL = youtube.generateEmbedUrl( video );

      const embedCode = `<iframe width="560" height="315" src="${ embedURL }" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;

      $('#player').hide().html( embedCode ).fadeIn(3000);
    });
  };

  // for (let i = 0; i < $links.length; i++) {
  //   thumbnailify( $links[i] );
  // }

  $links.each( thumbnailify );

});
