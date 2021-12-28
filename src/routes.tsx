import { Route, Switch, Redirect, RouteProps } from 'react-router-dom';
import Home from './Pages/All/Home';
import ProblemTests from './Pages/All/ProblemTests';
import ProblemStyle from './Pages/All/ProblemStyle';

export type ProtectedRouteProps = {
	authenticationPath: string;
	name: string;
} & RouteProps;

function RedirectHome() {
	return <Redirect to="/all/home" />;
}

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={RedirectHome} />
			<Route name="home" path="/all/home" component={Home} exact />
			<Route path="/all/style" component={ProblemStyle} exact />
			<Route path="/all/tests" component={ProblemTests} exact />
		</Switch>
	);
}
