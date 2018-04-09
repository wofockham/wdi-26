const fetchFact = function () {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return; // Not ready yet
    }
    console.log( xhr.responseText );
  };
  xhr.open('GET', 'http://numbersapi.com/random/trivia');
  xhr.send(); // Asynchronous
};

fetchFact();
