const fetchFact = function () {
  const xhr = new XMLHttpRequest();

  // This function will be run several times during the
  // request life cycle.
  xhr.onreadystatechange = function () {
    // Ignore all the readyStates except 4 (complete).
    if (xhr.readyState !== 4) {
      return; // Not ready yet
    }

    // If we get here, the responseText should be ready:
    const info = JSON.parse( xhr.responseText );
    const p = document.createElement('p');
    p.innerHTML = '<strong>' + info.number + '</strong>: ' + info.text;
    document.body.appendChild( p );
  };

  xhr.open('GET', 'http://numbersapi.com/random/trivia?json');
  xhr.send(); // Asynchronous

};

const button = document.getElementById('fetch');
button.addEventListener('click', fetchFact);

// We can also fire off the first fact request manually.
fetchFact();
