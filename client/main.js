import ReactDOM from 'react-dom';
import React from 'react';
import {Meteor} from 'meteor/meteor';
import App from '../imports/components/App';

Meteor.startup(()=>{
  ReactDOM.render(<App/>, document.getElementById('app'));
});