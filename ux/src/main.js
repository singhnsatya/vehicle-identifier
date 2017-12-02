import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react';
import Routes from './routes.js'
import store from './store';

ReactDOM.render(
	<Provider store = {store}>
	<Routes />
	</Provider>,
	document.getElementById('root'))