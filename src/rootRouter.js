import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./views/Dashboard";
import EditorBoard from "./views/EditorBoard";

export default function RootRouter() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Dashboard />
				</Route>
				<Route exact path="/edit">
					<EditorBoard />
				</Route>
				<Route match path="/edit/:id">
					<EditorBoard />
				</Route>
				<Route path="*">
					<h1>PAGE NOT FOUND - 404</h1>
				</Route>
			</Switch>
		</Router>
	);
}
