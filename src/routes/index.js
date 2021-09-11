import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import GameScreen from '../pages/GameScreen';
import HomeScreen from '../pages/HomeScreen';

const Routes = () => {
	return (
		<HashRouter>
			<Switch>
				<Route exact 
					path = "/" 
					component = {HomeScreen}
				/> {/* Định nghĩa url để đến trang */}
				<Route exact 
					path = "/GameScreen"
					component = {GameScreen}
				/>
			</Switch>
		</HashRouter>
	);
};

export default Routes;