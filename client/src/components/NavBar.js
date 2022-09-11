import { Button, Stack } from '@mui/material'
import { color } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../static/quizpic.png"

const style = {
  li: {
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "10px"

  },
  link: {
    textDecoration: "none",
    color: "white"
  }
}
export default function
  NavBar() {
    const handleUpload = ()=> {

    }
  return (
    <div style={{ width: "100vw", height: "12vh", display: "flex", backgroundColor: '#1b263b', boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.13);" }}>
      <div className="link-container" >
        <Stack direction={"row"} style={{ display: "flex", flexDirection: "row" }}>
          <img style={{ marginLeft:"10px", width: "80px", height: "75px" }} src={logo} alt="" />
          <ul style={{ display: "flex", listStyle: "none" }}>
            <li style={style.li} ><Link style={style.link} to="/">Home</Link></li>
            <li style={style.li}><Link style={style.link} to="/login">Play Quiz</Link></li>
            <li style={style.li}>
              <Link style={style.link} to="/register">DashBoard</Link></li>
          </ul>
          <div style={{ display: "flex",justifyContent:"flex-end", width: "40vw", height: "auto", marginLeft: "28vw" }} className="btns">
            <Button onClick={handleUpload} style={{ width: "100px", height: "40px", marginLeft: "110px" }} color="success" variant='contained'>Upload</Button>

            <Button style={{ width: "100px", height: "40px",marginLeft:"20px" }} color="error" variant='contained'>Reset</Button>


          </div>
        </Stack>
      </div>
    </div>
  )
}
