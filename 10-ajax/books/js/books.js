const fetchBook = function (event) {
  event.preventDefault(); // Don't leave the page.
  const query = $('#query').val();

  $.getJSON(`https://www.googleapis.com/books/v1/volumes?q=${ query }&key=AIzaSyAAiCRdJuc3KbZmfKzLhPkm4DAoG5-7lcA`).done(function (info) {
      const cover = info.items[0].volumeInfo.imageLinks.thumbnail;
      const title = info.items[0].volumeInfo.title;
      $('#cover').attr('src', cover).attr('alt', title);
  }).fail(function () {
    alert('Something bad happened');
  });
}

$(document).ready(function () {
  $('#title-search').on('submit', fetchBook);
});
