import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';

import  { createStore } from 'redux';
import todos from './reducers';

const initialState = [
		{
			id: 0,
			name: 'Первая задача',
			checked: true
		},
		{
			id: 1,
			name: 'Вторая задача',
			checked: true
		},
		{
			id: 2,
			name: 'Третья задача',
			checked: false
		},
	];

const store = createStore(todos, initialState);

ReactDOM.render( 
	<App store={store}/> ,
	document.getElementById('root')
);