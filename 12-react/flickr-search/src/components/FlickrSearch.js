import React, { PureComponent as Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
    // ANY EVENT HANDLER THAT NEEDS TO USE this HAS TO BE BOUND TO this HERE
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(e) {
    console.log( e.target.value );
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
    return (<h2>Gallery</h2>);
  }
}

class FlickrSearch extends Component {

  fetchImages(q) {
    console.log('fetchImages', q);
  }

  render() {
    return (
      <div>
        <h1>Image Search</h1>
        <SearchForm onSubmit={ this.fetchImages } />
        <Gallery />
      </div>
    )
  }
}

export default FlickrSearch;
