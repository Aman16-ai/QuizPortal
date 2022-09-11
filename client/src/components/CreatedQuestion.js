import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import "./css/CreatedQuestion.css"
export default function CreatedQuestion(props) {
    const {question,answer1,answer2,answer3,answer4,correctAnswer} = props?.questionData

    const handleUpdateBtn = ()=> {
        props.handleUpdateQuestion({...props.questionData,"idx":props.idx})
    }
    const handleDeleteBtn = ()=> {
        props.handleDeleteQuestions({...props.questionData,"idx":props.idx})
    }
  return (
    <div className='question-box'>
        <Stack>
            <Typography style={{marginTop:"20px"}} variant="p">
                {question}
            </Typography>

            <Typography style={{marginTop:"30px"}} variant="p">
                1: {answer1}
            </Typography>

            <Typography style={{marginTop:"10px"}} variant="p">
                2: {answer2}
            </Typography>
            <Typography style={{marginTop:"10px"}} variant="p">
                3: {answer3}
            </Typography>
            <Typography style={{marginTop:"10px"}} variant="p">
                4: {answer4}
            </Typography>
            <Typography style={{marginTop:"20px",fontWeight:"bold"}} variant="p">
                correct: {correctAnswer}
            </Typography>
            <Stack style={{marginTop:"40px"}} direction={"row"} spaceing={4}>
                <Button style={{backgroundColor:"white",color:"black"}} onClick={handleUpdateBtn} variant='contained'>Update</Button>
                <Button style={{marginLeft:"10px" ,backgroundColor:"white",color:"black"}} onClick={handleDeleteBtn} variant='contained'>Delete</Button>
            </Stack>
        </Stack>
    </div>
  )
}
