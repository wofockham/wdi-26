import React, { PureComponent as Component } from 'react';
import jsonp from 'jsonp-es6';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
    // ANY EVENT HANDLER THAT NEEDS TO USE this HAS TO BE BOUND TO this HERE
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(e) {
    this.setState( {query: e.target.value} );
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit( this.state.query );
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <input type="search" placeholder="Butterfly" onInput={ this._handleInput }/>
        <input type="submit" value="Search" />
      </form>
    );
  }
}

class Gallery extends Component {
  render() {
    return (
      <div>
        { this.props.images.map( (img) => <Image url={img} key={ img } /> ) }
      </div>
    );
  }
}

// Functional Component
// (for when Component doesn't need state or callbacks)
function Image (props) {
  return (
    <img src={props.url} width="150" height="150" alt={props.url} />
  )
}

class FlickrSearch extends Component {

  constructor(props) {
    super(props);
    this.state = { images: [] };
    this.fetchImages = this.fetchImages.bind( this );
  }

  fetchImages(q) {
    console.log('searching flickr for', q);

    const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
    const flickrParams = {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084', // not a secret key
      text: q,
      format: 'json'
    };

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

    // Usually we would Axios for AJAX
    jsonp(flickrURL, flickrParams, {callback: 'jsoncallback'}).then(function (results) {
      const images = results.photos.photo.map(generateURL);
      this.setState({images}); // means: {images: images}
    }.bind(this));
  }

  render() {
    return (
      <div>
        <h1>Image Search</h1>
        <SearchForm onSubmit={ this.fetchImages } />
        <Gallery images={ this.state.images }/>
      </div>
    )
  }
}

export default FlickrSearch;
