import React from "react";

export default ({children}) => (
  <div style={{margin: '0 auto', maxWidth: 960, padding: '0 1em'}}>
    <h3>My Hopes and Dreams For the Future of the Children of React</h3>
    {children()}
    {/* in a layout file, children is a function you must call */}
  </div>
);
