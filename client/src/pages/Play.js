import { Button, Stack, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import END_POINT from '../config/Api'
import Question from '../components/Question'
import Timmer from '../components/Timmer'
import Dialog from '../components/ConfirmationDialog'
import "./css/play.css"

export default function Play() {
    const [searchParams] = useSearchParams()
    let navigate = useNavigate();

    const [open,setOpen] = useState(false)
    
    const handleDialogPositiveBtn = ()=> {
        setOpen(false)
        navigate("/DashBoard")
    }

    const handleDialogNegativeBtn = ()=> {
        setOpen(false)
        navigate("/")
    }
    const [quiz, setQuiz] = useState({})
    const [isAllQuestionsDone, setIsAllQuestionsDone] = useState(false)
    const [questionAndAnswerData, setquestionAndAnswerData] = useState({})
    const [index, setIndex] = useState(0)
    const [isBtnDisable,setIsBtnDisable] = useState(false)
    const [istimmerComplete,setisTimmerComplete] = useState(false)

    const [userAnswerInfo, setUserAnswerInfo] = useState({})
    /*
        for recording the response of the user for an question
        userAnswerInfo = {
            question_id : {
                userAnswer : string
                correctAnswer : string
                attempted : boolean
            }
        }    
    */

    const fetchQuiz = async () => {
        try {
            let url = `${END_POINT}/quiz/getQuiz?quiz_id=${searchParams.get("quiz_id")}`
            const reponse = await fetch(url)
            const data = await reponse.json();
            console.log(data)
            setQuiz(data.quiz)
            setquestionAndAnswerData(data.quiz.questionsAndAnswers[index])
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchQuiz()
    }, [])

    useEffect(() => {
        if (quiz.questionsAndAnswers !== undefined) {
            if (index >= 0 && index < quiz.questionsAndAnswers.length) {
                setquestionAndAnswerData(quiz.questionsAndAnswers[index])
            }
            index === quiz.questionsAndAnswers.length - 1 ? setIsAllQuestionsDone(true) : setIsAllQuestionsDone(false)

        }
    }, [index])

    useEffect(()=> {
        if(istimmerComplete == true) {
            setOpen(true)
            setIsBtnDisable(false)
        }
    },[istimmerComplete])

    // useEffect(() => {
    //     console.log("Current score of user is " + score)
    // }, [score])

    const handleNextBtn = () => {
        setIndex(prev => prev + 1)
    }
    const handlePrevBtn = () => {
        setIndex(prev => prev - 1)
    }


    const calculateScore = () => {
        let score = 0;
        quiz?.questionsAndAnswers.forEach(e => {
            if (e._id in userAnswerInfo && userAnswerInfo[e._id].userAnswer === userAnswerInfo[e._id].correctAnswer) {
                score++;
            }
        });
        return score
    }
    const userResponse = () => {
        let keys = Object.keys(userAnswerInfo);
        let questionResponse = new Array()
        for(let i = 0;i<keys.length;i++) {
            questionResponse.push({"questionID" : keys[i],"userAnswer": userAnswerInfo[keys[i]].userAnswer,"correctAnswer":userAnswerInfo[keys[i]].correctAnswer})
        }
        return questionResponse;
    }
    const handleSubmitBtn = async () => {
        console.log("submit btn")
        setIsBtnDisable(true)
        setOpen(true)
        let questionResponse = userResponse();
        let score = calculateScore()

        let responseBody = {
            "quiz" : quiz._id,
            "userQuestionResponse":questionResponse,
            "score" : score
        }

        let url = `${END_POINT}/response/postResponse`;
        const response = await fetch(url,{
            method: 'POST',
            headers : {
                'Content-Type':'application/json',
                Authorization: `Bearer ${localStorage.getItem('quiz-token')}`
            },
            body: JSON.stringify(responseBody)
        })
        const data = await response.json();
        console.log(data)
    }
    return (
        <div className='play-container'>
            <Dialog
                open={open}
                title={"Submitted"}
                contentText={"Your response has been successfully submitted to check your response kindly go to the dashboard"}
                btnFirstText={"Home"}
                btnSecondText={"DashBoard"}
                handleBtnFirst={handleDialogNegativeBtn}
                handleBtnSecond={handleDialogPositiveBtn}
            />
            <div className="left">
                <div className="question-container">
                    <Question userAnswerInfo={userAnswerInfo} setUserAnswerInfo={setUserAnswerInfo} data={questionAndAnswerData} />
                    <Button disabled={isBtnDisable} className="actionbtn" onClick={handlePrevBtn} id="previous-action-btn" variant="contained">Previous</Button>
                    {isAllQuestionsDone ? <Button disabled={isBtnDisable} className="actionbtn" id='next-action-btn' onClick={handleSubmitBtn} variant="contained">Submit</Button> : <Button className="actionbtn" onClick={handleNextBtn} id='next-action-btn' variant="contained">Next</Button>}
                </div>
            </div>
            <div className="right">
                <div className="right-up">
                    <Timmer min={60} sec={0} istimmerComplete={istimmerComplete} setisTimmerComplete={setisTimmerComplete}/>
                </div>
                <div className="right-down">

                </div>
            </div>
        </div>

    )
}
