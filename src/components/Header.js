import React from 'react';
import '../css/header.css';
import {
	Link
} from 'react-router-dom'

const Header = () => {
	return (
		<div className = {'header_main'}>
			<div className = {'_url'}>
				<h3 className = {'_link'}><Link to = "/">Trang chủ</Link></h3>
				<h3 className = {'_link'}><Link to = "/GameScreen">Game</Link></h3>
			</div>
		</div>
	);
};

export default Header;