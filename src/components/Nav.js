import piggy from '../porco.png'
import React from 'react'



const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<div className="subHeader">
			<span className="normalText">A React App for County Fair Hog Fans</span>
			</div>
			<div className="filterHog">
			<select name="greased" onChange={props.onChangeType}>
				<option value = "all">All</option>
				<option value = "true">Greased</option>
				<option value = "false">Not greased</option>
			</select>
			</div>
			<div className="sortBy">
				<button onClick={props.sortByName} className = "sortName">Sort by name</button>
				<button onClick={props.sortByWeight} className = "sortWeight">Sort by weight</button>
			</div>
		</div>
	)
}

export default Nav
