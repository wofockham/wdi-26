import React from "react";
import Link from "gatsby-link";

export default () =>
  <div style={ {color: 'tomato'} }>
    <h1>Goodbye world!</h1>
    <p>No gods no master</p>
    <img src="http://fillmurray.com/500/600" />
    <div>
      <Link to="/page-2/">Link to page 2</Link>
    </div>
  </div>
