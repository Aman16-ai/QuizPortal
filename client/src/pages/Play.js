import { Button, Stack, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import END_POINT from '../config/Api'
import Question from '../components/Question'
import "./css/play.css"

export default function Play() {
    const [searchParams] = useSearchParams()
    const [quiz, setQuiz] = useState({})
    const [isAllQuestionsDone, setIsAllQuestionsDone] = useState(false)
    const [questionAndAnswerData, setquestionAndAnswerData] = useState({})
    const [index, setIndex] = useState(0)
    const [score,setScore] = useState(0) 

    const [userAnswerInfo,setUserAnswerInfo] = useState({}) 
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
        if(quiz.questionsAndAnswers !== undefined) {
            console.log(`index ${index} and length ${quiz.questionsAndAnswers.length} and done ${isAllQuestionsDone}`)
            if(index >= 0 && index < quiz.questionsAndAnswers.length) {
                setquestionAndAnswerData(quiz.questionsAndAnswers[index])
            }
            index===quiz.questionsAndAnswers.length-1?setIsAllQuestionsDone(true):setIsAllQuestionsDone(false)
            
        }
    }, [index])

   

    useEffect(()=> {
        console.log("Current score of user is "+score)
    },[score])

    const handleNextBtn = ()=> {
        setIndex(prev => prev + 1)
    }
    const handlePrevBtn = ()=> {
        setIndex(prev => prev - 1)
    }

    const calculateScore = () => {
        quiz?.questionsAndAnswers.forEach(e => {
            if(e._id in userAnswerInfo && userAnswerInfo[e._id].userAnswer === userAnswerInfo[e._id].correctAnswer) {
                setScore(prev => prev + 1)
            }
        });
    }
    const handleSubmitBtn = ()=> {
        console.log("submit btn")
        console.log(userAnswerInfo)
        calculateScore()
    }
    return (
        <div className='container'>
            <div className="question-container">
            <Question userAnswerInfo={userAnswerInfo} setUserAnswerInfo={setUserAnswerInfo} score={score} setScore={setScore} data={questionAndAnswerData} />
            <Button className="actionbtn" onClick={handlePrevBtn} id="previous-action-btn" variant="contained">Previous</Button>
            {isAllQuestionsDone?<Button className="actionbtn" id='next-action-btn' onClick={handleSubmitBtn} variant="contained">Submit</Button>:<Button className="actionbtn" onClick={handleNextBtn} id='next-action-btn' variant="contained">Next</Button>}
            </div>
        </div>

    )
}
