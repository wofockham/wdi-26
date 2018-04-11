const state = {
  page: 1,
  requestInProgress: false,
  lastPage: false
};

const searchFlickr = function (term) {
  if (state.requestInProgress || state.lastPage) { return; }
  state.requestInProgress = true;

  console.log('Searching flickr for', term);

  // the jsoncallback=? here lets us use something called JSONP
  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  // This is actually using JSONP, not AJAX
  // but jQuery lets us pretend it is just AJAX.
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // not a secret key
    text: term,
    format: 'json',
    page: state.page++
  }).done( showImages ).done(function (r) {
    state.requestInProgress = false;
    if (r.photos.page >= r.photos.pages) {
      state.lastPage = true;
    }
  });
};

const showImages = function (results) {
  const generateURL = function (p) {
    return [
      'http://farm',
      p.farm,
      '.static.flickr.com/',
      p.server,
      '/',
      p.id,
      '_',
      p.secret,
      '_q.jpg' // Change "q" to something else for different sizes
    ].join('');
  };

  results.photos.photo.forEach(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img />', {src: thumbnailURL}); // Or .attr('src', thumbnailURL)
    $img.appendTo('#images'); // Or $('#images').append($img);
  });
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault();
    const query = $('#query').val();
    state.lastPage = false;
    state.page = 1;
    $('#images').empty();
    searchFlickr( query );
  });

  $(window).on('scroll', function () {
    const documentHeight = $(document).height();
    const windowHeight = $(window).height();
    const scrollTop = $(document).scrollTop();

    const scrollBottom = documentHeight - (windowHeight + scrollTop);

    if (scrollBottom < 500) { // Tweak this value
      const query = $('#query').val();
      searchFlickr( query ); // Don't make too requests: throttle this
    }
  });
});

/* TODO: ************************************************************

pagination -- eventually we should all possible matching results
throttle the requests -- don't make too many requests
stop at end of the results -- no more requests
bonus: whatever you like

*/
