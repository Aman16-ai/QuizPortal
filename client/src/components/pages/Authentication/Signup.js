import { Alert, Button, Snackbar, TextField, Typography } from '@mui/material'
import React from 'react'
import "./css/SignUp.css"
import { useState } from 'react'
import { Email, Key, FirstPage, LastPage } from '@mui/icons-material'
import InputAdornment from '@mui/material/InputAdornment'
import { Link, useNavigate } from 'react-router-dom'
import END_POINT from '../../../config/Api'
export default function Login() {

  const negivate = useNavigate()

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const handleSnackClose = ()=> {
    setTimeout(()=> {
      setOpen(false)
    },2000)
  }
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleInputOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCredentials({ ...credentials, [name]: value })
  }


  const handleLogin = async () => {
    try {
      let url = `${END_POINT}/auth/register`

      const response = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      })

      const data = await response.json();
      if (response.status === 200) {
        setMessage("Register successfully")
        setSeverity("success")
        localStorage.setItem("quiz-token", data.authtoken)
        setTimeout(()=> {
          negivate("/")
        window.location.reload(true)
        },1000)
      }
      if(response.status === 400) {
        setMessage("Email already used")
        setSeverity("error")
      }
    }
    catch (err) {
      setMessage("Registeration failed")
      setSeverity("error")
    }
    finally {
      setOpen(true)
    }

  }
  const handleSumbit = (e) => {
    e.preventDefault()
    if (credentials.email.length !== 0 && credentials.password.length !== 0) {
      handleLogin()
    }
    else {
      alert("please enter the credentials")
    }
  }
  return (
    <>
      <form onSubmit={handleSumbit}>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleSnackClose}>
        <Alert onClose={handleSnackClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
        <div className="form-container">
          <Typography id="loginTypo" variant="h4" align="center" >
            Register
          </Typography>
          <TextField name='firstName' value={credentials.firstName} onChange={handleInputOnChange} style={{ marginTop: "40px" }} className="textinput" label="First Name" variant="outlined" InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FirstPage />
              </InputAdornment>
            ),
          }} />
          <TextField name='lastName' value={credentials.lastName} onChange={handleInputOnChange} style={{ marginTop: "30px" }} className="textinput" label="Last Name" variant="outlined" InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LastPage />
              </InputAdornment>
            ),
          }} />
          <TextField name='email' value={credentials.email} onChange={handleInputOnChange} style={{ marginTop: "30px" }} className="textinput" id="emailTextField" label="Email" variant="outlined" InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }} />
          <TextField name='password' value={credentials.password} onChange={handleInputOnChange} style={{ marginTop: "30px" }} className="textinput" id="passwordTextField" label="password" variant="outlined" InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Key />
              </InputAdornment>
            ),
          }} />

          <Button type='submit' id="submitBtn" variant="contained">Register</Button>
          <div className="signup-link">
            <Typography>Already have an account ? ? <Link to="/login">Login</Link></Typography>
          </div>
        </div>
      </form>
    </>
  )
}
