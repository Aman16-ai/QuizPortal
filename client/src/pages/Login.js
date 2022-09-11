import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import "./css/Login.css"
import { useState } from 'react'
import { Email,Key } from '@mui/icons-material'
import InputAdornment from '@mui/material/InputAdornment'
import { Link, useNavigate } from 'react-router-dom'
import END_POINT from "../config/Api"
import { useSelector, useDispatch } from 'react-redux'
import { setCredentials } from '../slices/loginSlice'
import { login } from '../slices/loginSlice'
export default function Login() {

  const negivate = useNavigate()

  const credentials = useSelector((state)=>state.login.credentials)
  const token = useSelector((state)=>state.login.token)
  const dispatch = useDispatch()
  // const [credentials, setCredentials] = useState({
  //   email : "",
  //   password : ""
  // });

  const handleInputOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // setCredentials({...credentials,[name]:value})
    // if(name == 'email') {
    //   dispatch(setEmail(value))
    // }
    dispatch(setCredentials({name,value}))

    
  }


  useEffect(()=> {
    console.log(token)
    if(token !== null && token !== undefined && token !== "" && token !== " ") {
      localStorage.setItem("quiz-token",token)
        negivate("/")
        window.location.reload(true)
    }
  },[token])
  const handleLogin = async()=> {

    dispatch(login(credentials))
    // let url = `${END_POINT}/auth/login`

    // const response = await fetch(url,{
    //   method:"post",
    //   headers: {
    //     "Content-Type":"application/json"
    //   },
    //   body : JSON.stringify(credentials)
    // })

    // const data = await response.json();
    // if(response.status === 200) {
    //   localStorage.setItem("quiz-token",data.authtoken)
    //   negivate("/")
    //   window.location.reload(true)
    // }
    
  }
  const handleSumbit = (e)=> {
    e.preventDefault()
    if(credentials.email.length !== 0 && credentials.password.length !== 0) {
      handleLogin()
    }
    else {
      alert("please enter the credentials")
    }
  }
  return (
    <>
      <form onSubmit={handleSumbit}>
      <div className="form-container">
          <Typography id="loginTypo" variant="h4" align="center" >
            Login
          </Typography>
          <TextField name='email' value={credentials.email} onChange={handleInputOnChange} style={{marginTop:"60px"}} className="textinput" id="emailTextField" label="Email" variant="outlined" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Email />
            </InputAdornment>
          ),
        }} />
          <TextField name='password' value={credentials.password} onChange={handleInputOnChange} style={{marginTop:"30px"}} className="textinput" id="passwordTextField" label="password" variant="outlined" InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Key />
            </InputAdornment>
          ),
        }} />

        <Typography id="forget-pass-typo" variant='string'>
          <Link to="#">Forget your password</Link>
        </Typography>
        <Button type='submit' id="submitBtn" variant="contained">Log In</Button>
        <div className="signup-link">
          <Typography>Don't have an account ? <Link to="/register">Sign Up</Link></Typography>
        </div>
      </div>
      </form>
    </>
  )
}
