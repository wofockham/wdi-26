import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.js';

Meteor.startup( () => {
  console.log('Meteor started');
  render(<App />, document.getElementById('render-target'));
});
