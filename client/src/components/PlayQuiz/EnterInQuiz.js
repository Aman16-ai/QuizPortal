import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./EnterInQuiz.css"
export default function PlayQuiz() {
  const [quizId, setQuizId] = useState("")
  return (
    <div className="container">
        <div className="box-container">
          <Typography id="quiz-typo" variant='h4'>Play Quiz</Typography>
            <div className="form-container">
            <TextField value={quizId} onChange={(e)=>setQuizId(e.target.value)} label="Enter Quiz ID" variant='outlined'/>
            <Button id="btn" variant="contained"><Link id="link" to={`/quiz/${quizId}`}>Play</Link></Button>
            </div>
        </div>

    </div>
  )
}