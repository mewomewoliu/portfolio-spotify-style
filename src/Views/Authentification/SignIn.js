import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './signInStyle.css';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Link } from "react-router-dom";


function SignIn(props) {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({ value: "" });

  console.log("auth", localStorage.getItem("isAuthenticated"));

  const handleInputChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e, nextPage) => {
    e.preventDefault();
    //if username or password field is empty, return error message
    if (userData.username === "" || userData.password === "") {
      setErrorMessage((prevState) => ({
        value: "Empty username/password field",
      }));
    } else if (userData.username == "admin" && userData.password == "192103") {
      //Signin Success
      localStorage.setItem("isAuthenticated", "true");
      window.location.pathname = nextPage;
    } else {
      //If credentials entered is invalid
      setErrorMessage((prevState) => ({ value: "Invalid username/password" }));
    }
  };

  return (
    <main className="signin-container">
      <div className="back-btn">
      <Link to="/projects"><h2>Back</h2></Link>
      </div>
      

<div className="text-center">

<h1>Guest Space</h1>
<form className="inputField">
          
          <Grid container direction="column">
            <Grid item xs>
              <Grid container direction="row" spacing={1} justifyContent="center" alignItems="center">
                <Grid item xs={1}>
                  <h3>Your name</h3>
                </Grid>
                <Grid item xs={3}>
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  onChange={(e) => handleInputChange(e)}
                />
                </Grid>               
                </Grid>
            </Grid>
            
            <Grid item xs>
              <Grid container direction="row" spacing={0} justifyContent="center" alignItems="center">
                <Grid item xs={1}>
                  <h3>Password</h3>
                </Grid>
                <Grid item xs={3}>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  onChange={(e) => handleInputChange(e)}
                />
                </Grid>               
                </Grid>
            </Grid>
            

            <Grid item xs >
            <button
              type="submit"
              className="btn"
              onClick={(e)=>handleSubmit(e, props.nextPage)}
            >
              Submit
            </button>
            
            </Grid>

  </Grid>
          

  {errorMessage.value && (
    <p className="text-danger"> {errorMessage.value} </p>
  )}
</form>
</div>
    </main>
    
  );
}

export default SignIn;