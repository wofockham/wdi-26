const deleteQuote = function (id) {
  fetch(`/quotes/${id}`, {method: 'delete'}).then(() => {
    window.location.reload();
  });
}
