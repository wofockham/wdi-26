'use strict';

var state = {
  page: 1,
  lastPage: false
};

var searchFlickr = function searchFlickr(term) {
  if (state.lastPage) {
    return;
  }

  console.log('Searching Flickr TM for', term);

  // the jsoncallback=? here lets us use something called JSONP
  var flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  // This is actually using JSONP, not AJAX
  // but jQuery lets us pretend it is just AJAX.
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // not a secret key
    text: term,
    format: 'json',
    page: state.page++
  }).done(showImages).done(function (r) {
    if (r.photos.page >= r.photos.pages) {
      state.lastPage = true;
    }
  });
};

var showImages = function showImages(results) {
  var generateURL = function generateURL(p) {
    return ['http://farm', p.farm, '.static.flickr.com/', p.server, '/', p.id, '_', p.secret, '_q.jpg' // Change "q" to something else for different sizes
    ].join('');
  };

  results.photos.photo.forEach(function (photo) {
    var thumbnailURL = generateURL(photo);
    var $img = $('<img />', { src: thumbnailURL }); // Or .attr('src', thumbnailURL)
    $img.appendTo('#images'); // Or $('#images').append($img);
  });
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault();
    var query = $('#query').val();
    state.lastPage = false;
    state.page = 1;
    $('#images').empty();
    searchFlickr(query);
  });

  var throttledSearchFlickr = _.throttle(searchFlickr, 6000, { trailing: false });

  $(window).on('scroll', function () {
    var documentHeight = $(document).height();
    var windowHeight = $(window).height();
    var scrollTop = $(document).scrollTop();

    var scrollBottom = documentHeight - (windowHeight + scrollTop);

    if (scrollBottom < 500) {
      // Tweak this value
      var query = $('#query').val();
      throttledSearchFlickr(query); // Don't make too requests: throttle this
    }
  });
});

/* TODO: ************************************************************

pagination -- eventually we should all possible matching results
throttle the requests -- don't make too many requests
stop at end of the results -- no more requests
bonus: whatever you like

*/