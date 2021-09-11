import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import HomeScreen from '../pages/HomeScreen';

const Routes = () => {
	return (
		<HashRouter>
			<Switch>
				<Route path = "/"> {/* Định nghĩa url để đến trang */}
					<HomeScreen/> {/* Màn hình để render ra ngoài */}
				</Route>
			</Switch>
		</HashRouter>
	);
};

export default Routes;