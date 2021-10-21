import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import { Grid } from '@material-ui/core';
import './styles.css';



const CasesNav = () => {
	


	return (
		<div className="navbar">
			
			
			<Grid className="nav-list" container direction="column" spacing={1}>
				<Grid item xs={3}>
				<Link className=" nav About" to="/about"><p className='nav-text-vertical'> <span className="about-link"> About </span></p></Link>
				</Grid>
				<Grid item xs={3}>
				<Link className=" nav Portfolio" to="/projects"><p className='nav-text-vertical'><span className="projects-link">Projects</span></p></Link>
				</Grid>
				<Grid item xs={3}>
				<Link className=" nav Passion" to="/passion"><p className='nav-text-vertical'><span className="passion-link">Passion</span></p></Link>
				</Grid>
				<Grid item xs={3}>
					{/* <Link className=" nav CV" to="/cv"><p className='nav-text-vertical'><span className="cv-link">CV</span></p></Link> */}
					
					<a href="https://read.cv/miaomiao"><p className="cv">CV</p></a>
				</Grid>
			</Grid>
		</div>
	);
}

export default CasesNav;