const $links = $( 'a' );

for (let i = 0; i < $links.length; i++) {
  let $link = $( $links[i] ); // Turn the vanilla DOM node back into a jQuery object.

  let href = $link.attr( 'href' ); // getter
  let thumbnailURL = youtube.generateThumbnailUrl( href );

  // Chaining
  let $thumbnail = $( '<img />' ).attr( 'src', thumbnailURL ); // setter
  $link.prepend( $thumbnail );

  // Alternatively:
  // $( '<img />' ).attr( 'src', thumbnailURL ).prependTo( $link ); // setter
}
