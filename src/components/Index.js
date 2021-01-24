import React, { Component } from 'react';
import { render } from 'react-dom';
import SimpleTween from "./SimpleTween";

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'React'
		};
	}

	render() {
		return <div className="container">

        
			<SimpleTween />

      
		</div>;
	}

}

render(<App />, document.getElementById('root'));