import React from 'react'
import "./css/Home.css"
import quizpic from "../static/quizpic.png"
import { Typography,Button } from '@mui/material'
import {Link} from "react-router-dom"
export default function Home() {
  return (
    <>
        <div className="container">
            <div className="left-container">
                <Typography  className="typoHeading" id="heading" align="center" variant="h4" component="h4">
                Welcome to QuizPortal
                </Typography>
                <Typography className="typoHeading" id="subheading" align="center"
                paragraph={true} variant="h6" component="h5">
                Test your knowlegde here and prove <br/> yourself to the world.
                </Typography>

                <div className="btns">
                    <Button className="buttons"  id="playBtn" variant="contained"><Link className="links" to="/login">Play Quiz</Link></Button>
                    <Button className="buttons"  id="createBtn" variant="contained"><Link className="links" to="/login">Create Quiz</Link></Button>
                <Button 
                className="buttons"
                id="dashboardbtn"
                variant="contained"><Link className="links" to="/login">DashBoard</Link></Button>
                </div>
            </div>
            <div className="right-container">
                <img id="quizImg" src={quizpic} alt="pic" />
            </div>
        </div>
    </>
  )
}
