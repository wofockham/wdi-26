const links = document.querySelectorAll( 'a' );

for (let i = 0; i < links.length; i++) {
  let href = links[i].getAttribute( 'href' );
  let thumbnailURL = youtube.generateThumbnailUrl( href );

  let thumbnail = document.createElement( 'img' );
  thumbnail.setAttribute( 'src', thumbnailURL );

  links[i].appendChild( thumbnail );
}
