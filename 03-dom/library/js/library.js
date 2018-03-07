const books = [{
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
    },
    {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
    }
];

const list = document.createElement('ul');

for (let i = 0; i < books.length; i++) {
  let book = books[i];
  let item = document.createElement('li');
  item.innerHTML = `${book.title} by ${book.author}`;
  if (book.alreadyRead) {
    item.className = 'read';
  }
  list.appendChild( item );
}

document.body.appendChild( list );
