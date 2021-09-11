import React, { useState, useEffect } from 'react';
import Main from './Main';

const GameScreen = () => {

	const ARR_DICE_NUMBER = [0,0,0]

	const [totalDice,setTotalDice] = useState([]);

	const roll = async () => {
		let itemIndex = -1;
		const newTotal = ARR_DICE_NUMBER.map((item,index)=>{
			const min = Math.ceil(1);
			const max = Math.floor(7);
			const random = Math.floor(Math.random() * (max - min) + min);
			itemIndex++;
			return itemIndex === index ? random : item;
		})
		setTotalDice(totalDice => [...totalDice,newTotal]);
		console.log(totalDice)
	}

	useEffect(()=>{

	},[totalDice])

	return (
		<Main>
			<h1>GameScreen</h1>
			<button onClick = {roll} type = {'button'}>Chạy</button>
		</Main>
	);
};

export default GameScreen;