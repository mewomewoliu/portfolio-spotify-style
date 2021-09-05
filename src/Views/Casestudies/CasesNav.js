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
			{/* <Link className=" nav Home" to="/">
			<div className="logo">
				<img className="logo-img" src="https://64.media.tumblr.com/3ad4b7267cd1af63cd4f0af474ff6c0a/c4282aa208b95acd-a6/s1280x1920/6ca9598cd0b31330c0e41040a612f97fe4e5fb23.png" alt="logo"/>
			</div>
			</Link> */}
			
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