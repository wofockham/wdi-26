import React from "react";
import Link from "gatsby-link";

const ListLink = (props) => (
  <li style={{ display: 'inline-block', marginRight: '1em' }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>
);


export default ({children}) => (
  <div style={{margin: '0 auto', maxWidth: 960, padding: '0 1em'}}>
    <header style={ {marginBottom: '1.5em'} }>
      <Link to="/">
        <h3>My Hopes and Dreams For the Future of the Children of React</h3>
      </Link>
      <ul style={ {marginLeft: 0} }>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about">About</ListLink>
        <ListLink to="/contact">Contact</ListLink>
      </ul>
    </header>
    {children()}
    {/* in a layout file, children is a function you must call */}
  </div>
);
