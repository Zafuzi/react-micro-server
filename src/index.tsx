import './index.css';
import React, {Component} from "react";
import ReactDOM from 'react-dom';
import {Header} from "./components/header";


class App extends Component {
	componentDidMount()
	{
		document.title += " - Home"
	}

	render ()
	{
		return (
			<main>
				<Header />
			</main>
		);
	}
}

// ========================================

ReactDOM.render(<App/>, document.getElementById("root"));
