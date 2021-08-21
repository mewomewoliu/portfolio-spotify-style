import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import { Grid } from '@material-ui/core';
import './styles.css';



const Nav = () => {
	


	return (
		<div className="navbar">
			<Grid container spacing={2} justifyContent="center" className="nav-grid">
				<Grid item xs={2}>
                <Link className=" nav about" to="/about">
                <p className='nav-text'>About</p> </Link>
				</Grid>
				<Grid item xs={3}>
				<Link className=" nav portfolio" to="/projects"><p className='nav-text'>Projects</p></Link>
				</Grid>
				<Grid item xs={3}>
				<Link className=" nav passion" to="/passion"><p className='nav-text'>Passion</p></Link>
				</Grid>
				
			</Grid>
		</div>
	);
}

export default Nav;