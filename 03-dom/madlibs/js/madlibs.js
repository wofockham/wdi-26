const makeMadLibs = function () {
  const noun = document.getElementById('noun').value;
  const adjective = document.getElementById('adjective').value;
  const name = document.getElementById('person').value;

  const story = `${ name } really likes ${ adjective } ${ noun }`;

  document.getElementById('story').innerHTML = story;
};

const button = document.getElementById('lib-button');

button.addEventListener('click', makeMadLibs);
