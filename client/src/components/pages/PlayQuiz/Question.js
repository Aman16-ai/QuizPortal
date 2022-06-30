import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React from 'react'
import "./css/Card.css"
import { useState } from 'react'
export default function Card(props) {

    const [userAnswer,setUserAnswer] = useState("")
    const handleAnswerClick = (e) => {
        setUserAnswer(e.target.value)
    }

    const handleNextBtn = () => {
        console.log(props.index)
        props.setIndex(prev => prev + 1)
        console.log(props.index)
    }
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

                <div className="actionBtnContainer">
                    <Button id="action-btn" variant="contained">Previous</Button>
                    <Button onClick={handleNextBtn} id='action-btn' variant="contained">Next</Button>
                </div>
            </div>

        </div>
    )
}
