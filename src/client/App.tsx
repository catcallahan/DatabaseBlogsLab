import * as React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import HomePage from '../client/components/homepage'
import EditBlog from './components/editblog';
import Singleblog from './components/singleblog';

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			blogs: []
		};
	}



	render() {
		return (
			// <main className="container my-5">
			// 	<h1 className="text-primary text-center">My Blog!</h1>
			// 	<ul className="list-group">
			// 		{this.state.blogs.map(blog => {
			// 			return <li className ='list-group-item'>{blog.title}</li>
			// 		})}
			// 	</ul>
			// </main>

			<Router>
				<React.Fragment>
				<Link className ='btn text-light mt-2' to="/">Go Home</Link>
				<Switch>
					<Route exact path = "/" component = {HomePage} />
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
