import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import { Grid } from '@material-ui/core';
import './styles.css';



const NavBar = () => {
	


	return (
		<div className="navbar">
			<Grid container>
				<Grid item xs>
					<Link className=" nav About" to="/about">About</Link>
				</Grid>
				<Grid item xs>
				<Link className=" nav Portfolio" to="/portfolio">Portfolio</Link>
				</Grid>
				<Grid item xs>
				<Link className=" nav Passion" to="/passion">Passion</Link>
				</Grid>
				<Grid item xs>
				<Link className=" nav Passion" to="/cv">CV</Link>
				</Grid>
			</Grid>
		</div>
	);
}

export default NavBar;