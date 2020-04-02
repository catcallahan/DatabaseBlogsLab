import * as React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import HomePage from '../client/components/homepage'
import EditBlog from './components/editblog';
import Singleblog from './components/singleblog';
import CreateBlog from './components/createBlog';

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			blogs: []
		};
	}



	render() {
		return (

			<Router>
				<React.Fragment>
				<Link className ='btn mt-2' to="/">Go Home</Link>
				<Switch>
					<Route exact path = "/" component = {HomePage} />
					<Route exact path = "/admin" component = {CreateBlog} />
					<Route exact path = "/:id?" component = {Singleblog} />
					<Route exact path = "/:id?/edit" component = {EditBlog} />

				</Switch>
				</React.Fragment>
			</Router>
		);
	}
}

export interface IAppProps {

	
}

export interface IAppState {
	blogs: Array<any>;
}

export default App;
