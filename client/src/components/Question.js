import { Button, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import "./css/Card.css"
import { useState } from 'react'
export default function Card(props) {

    const [userAnswer,setUserAnswer] = useState("")
    
    const handleAnswerClick = (e) => {
        setUserAnswer(e.target.value)
        props.setUserAnswerInfo({...props.userAnswerInfo,[props.data._id]:{"userAnswer":e.target.value,"correctAnswer":props.data.correctAnswer,"attempted":true}})
    
    }

    useEffect(()=> {
       
        if(props.data._id in props.userAnswerInfo) {
            setUserAnswer(props.userAnswerInfo[props.data._id].userAnswer)
        }
        console.log(props.userAnswerInfo)
    },[props.data])

    useEffect(()=> {
      
    },[])

    return (
        <div>
            <div className="quiz-card">
                <Typography variant={"h5"} id="question-heading">
                    {props.data.question}
                </Typography>

                <div className="optionsContainer">

                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={userAnswer}
                            onChange={handleAnswerClick}
                        >
                            <FormControlLabel className='clbl' value={props.data.answer1} control={<Radio />} label={props.data.answer1} />
                            <FormControlLabel className='clbl' value={props.data.answer2} control={<Radio />} label={props.data.answer2} />
                            <FormControlLabel className='clbl' value={props.data.answer3} control={<Radio />} label={props.data.answer3} />
                            <FormControlLabel className='clbl' value={props.data.answer4} control={<Radio />} label={props.data.answer4} />
                        </RadioGroup>
                    </FormControl>
                </div>

              
            </div>

        </div>
    )
}
