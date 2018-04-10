const fetchBook = function (event) {
  event.preventDefault(); // Don't leave the page.
  const query = document.getElementById('query').value;

  $.ajax(`https://www.googleapis.com/books/v1/volumes?q=${ query }&key=AIzaSyAAiCRdJuc3KbZmfKzLhPkm4DAoG5-7lcA`, {
    success: function (info) {
        const cover = info.items[0].volumeInfo.imageLinks.thumbnail;
        const title = info.items[0].volumeInfo.title;
        const image = document.getElementById('cover');
        image.src = cover;
        image.alt = title;
    }
  });
}

document.getElementById('title-search').addEventListener('submit', fetchBook);
