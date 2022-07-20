import { Button, Stack, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import END_POINT from '../config/Api'
import Question from '../components/Question'
import "./css/play.css"

// 62c1a55d366bb25e1696268b
export default function Play() {
    const params = useParams()
    const [quiz, setQuiz] = useState({})
    const [isAllQuestionsDone, setIsAllQuestionsDone] = useState(false)
    const [data, setData] = useState({})
    const [index, setIndex] = useState(0)
    const [score,setScore] = useState(0)


    const fetchQuiz = async () => {
        try {
            let url = `${END_POINT}/quiz/getQuizById/${params.id}`
            const reponse = await fetch(url)
            const data = await reponse.json();
            console.log(data)
            setQuiz(data.quiz)
            setData(data.quiz.questionsAndAnswers[index])
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
                setData(quiz.questionsAndAnswers[index])
            }

            // if(index === quiz.questionsAndAnswers.length-1) {
            //     setIsAllQuestionsDone(true)
            // }
            // else {
            //     setIsAllQuestionsDone(false)
            // }
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
    return (
        <div className='container'>
            <div className="question-container">
            <Question score={score} setScore={setScore} data={data} />
            <Button className="actionbtn" onClick={handlePrevBtn} id="previous-action-btn" variant="contained">Previous</Button>
            {isAllQuestionsDone?<Button className="actionbtn" id='next-action-btn' variant="contained">Submit</Button>:<Button className="actionbtn" onClick={handleNextBtn} id='next-action-btn' variant="contained">Next</Button>}
            </div>
        </div>

    )
}
