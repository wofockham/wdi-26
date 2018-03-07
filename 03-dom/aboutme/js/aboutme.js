document.body.style.fontFamily = "Arial, sans-serif";

const nickname = document.getElementById('nickname');
nickname.innerHTML = 'The Blade';
document.getElementById('favorites').innerHTML = 'post punk, cemeteries, butterflies';
document.querySelector('#hometown').innerHTML = 'Sydney';

const items = document.getElementsByTagName('li');
for (let i = 0; i < items.length; i++) {
  items[i].className = "listitem";
}

const bill = document.createElement('img');
bill.src = 'http://fillmurray.com/400/700';
document.body.appendChild( bill );
