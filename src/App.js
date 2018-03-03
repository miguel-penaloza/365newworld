import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Dashboard />
			</div>
		);
	}
}

export default App;
