// es6
import React from 'react';

//es5
var ReactDOM = require('react-dom');
var mui = require('material-ui');
var Ticker = require('./components/CounterComponent.jsx');

ReactDOM.render(<Ticker />, document.getElementById('app'));
