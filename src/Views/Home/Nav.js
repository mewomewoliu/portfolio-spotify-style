import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import { Grid } from '@material-ui/core';
import './styles.css';
import { Container } from '@material-ui/core';



const Nav = () => {
	


	return (
		<div className="navbar">
			<Grid container spacing={0} justifyContent="center" className="nav-grid">
				
				<Grid item xs={5}>
					<Link className=" nav portfolio" to="/projects"><p className='nav-text'>Projects</p></Link>
					<Link className=" nav portfolio" to="/projects"><Container className="home-banner">
						<img src="https://64.media.tumblr.com/3b403c3604b170117f767177b2b885a1/f12ffba461b4cb9d-71/s500x750/0a83904508e2bb168eb298316502eb7ebabc0453.gifv" className="nav-img"/>
					</Container></Link>
				</Grid>

				<Grid item xs={5}>
					<Link className=" nav passion" to="/passion"><p className='nav-text'>Passion</p></Link>
					<Link className=" nav portfolio" to="/passion"><Container className="home-banner">
						<img src="https://64.media.tumblr.com/e779995496281ae1378c8f7e64e0f78b/6c3875471e6bfee7-84/s1280x1920/c2619a231196a47374a99614eda45d57b02add03.png" className="nav-img" />
						
					</Container></Link>
				</Grid>
				
			</Grid>
			<Link className=" nav portfolio" to="/about"><div className="box bg"></div>
                    <div className="box moveup">
                        <h2> About Me</h2>
				</div>
			</Link>
		</div>
	);
}

export default Nav;